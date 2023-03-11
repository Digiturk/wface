import * as React from 'react';
import {
  IOC, ISearchProvider, MenuTreeUtil, IMenuTreeItem, AppContext,
  WListItem, WListItemIcon,
  WListItemText, WIcon
} from '../../../';
// @ts-ignore
var Fuse = require('fuse.js');

export default class MenuSearchProvider implements ISearchProvider {

  openScreen!: (item: IMenuTreeItem) => void;

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
      <WListItem id={"search-item-" + item.id} dense key={"key-search-item-" + item.id}>
        <WListItemIcon>
          <WIcon iconSize="small">{item.icon}</WIcon>
        </WListItemIcon>
        <WListItemText>
          {item.text}
        </WListItemText>
      </WListItem>
    );
  }

  onItemSelected(item: IMenuTreeItem) {
    this.openScreen(item);
  }
}