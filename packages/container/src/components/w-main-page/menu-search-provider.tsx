import * as React from 'react';
import * as WFace from '@wface/components';
import { ISearchProvider, MenuTreeUtil, IMenuTreeItem } from '@wface/ioc';
import { injectable, inject } from "inversify";
import { AppContext } from '@wface/store';

@injectable()
export default class MenuSearchProvider implements ISearchProvider {

  @inject("AppContext") appContext: AppContext;
  @inject("openScreen") openScreen: (item: IMenuTreeItem) => void;

  search(term: string): Promise<any[]> {
    return new Promise((resolve, reject) => {

      const result = [];
      MenuTreeUtil.menuTreeForEach(this.appContext.menuTree, (item: IMenuTreeItem) => {
        if (item.subNodes && item.subNodes.length > 0) {
          return false;
        }

        if (item.text.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) != -1) {
          result.push(item);
        }

        return false;
      });

      // setTimeout(() => resolve(result), 1000);
      resolve(result);
    })
  }

  renderSearchItem(item: IMenuTreeItem): React.ReactNode {
    return (
      <WFace.WListItem dense key={"key-search-item-" + item.id}>
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