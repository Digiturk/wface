import * as React from 'react';
import * as WFace from '@wface/components';
import IOC, { ISearchProvider, MenuTreeUtil, IMenuTreeItem } from '@wface/ioc';
import { injectable, inject } from "inversify";
import { AppContext } from '@wface/store';
var Fuse = require('fuse.js');

@injectable()
export default class MenuSearchProvider implements ISearchProvider {

  @inject("openScreen") openScreen: (item: IMenuTreeItem) => void;

  search(term: string): Promise<any[]> {
    return new Promise<any[]>((resolve, reject) => {
      
      const appContext = IOC.get<AppContext>("AppContext");

      const list: IMenuTreeItem[] = [];
      MenuTreeUtil.menuTreeForEach(appContext.menuTree, (item: IMenuTreeItem) => {
        if (item.subNodes && item.subNodes.length > 0) {
          return false;
        }
  
        list.push(item);
        return false;
      });

      // @ts-ignore
      const fuse = new Fuse(list, {
        shouldSort: true,
        threshold: 0.3,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
          "text",
        ]
      });


      const result = fuse.search(term);
      resolve(result);
    })
  }

  renderSearchItem(item: IMenuTreeItem): React.ReactNode {
    return (
      <WFace.WListItem id={"search-item-" + item.id} dense key={"key-search-item-" + item.id}>
        <WFace.WListItemIcon>
          <WFace.WIcon iconSize="small">{item.icon}</WFace.WIcon>
        </WFace.WListItemIcon>
        <WFace.WListItemText>
          {item.text}
        </WFace.WListItemText>
      </WFace.WListItem>
    );
  }

  onItemSelected(item: IMenuTreeItem) {
    this.openScreen(item);
  }
}