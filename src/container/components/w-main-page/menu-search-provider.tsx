import * as React from 'react';
import {
  MenuTreeUtil, IMenuTreeItem,
  WListItem, WListItemIcon,
  WListItemText, WIcon
} from '../../../';
import { AppContext } from '../../../store';
import Fuse from 'fuse.js';
// var Fuse = require('fuse.js');

export default {
  
  search(term: string, appContext: AppContext): Promise<any[]> {
    return new Promise<any[]>((resolve, reject) => {
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
        // maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
          "text",
        ]
      });

      const result = fuse.search(term).map(i => i.item);
      resolve(result);
    })
  },

  renderSearchItem(item: IMenuTreeItem, appContext: AppContext): React.ReactNode {
    return (
      <WListItem id={"search-item-" + item.id} dense key={"key-search-item-" + item.id}>
        <WListItemIcon>
          {typeof item.icon == "string" ? (
            <WIcon>{item.icon}</WIcon>
          ) : (
            <>{item.icon}</>
          )}
        </WListItemIcon>
        <WListItemText>
          {item.text}
        </WListItemText>
      </WListItem>
    );
  },

  onItemSelected(item: IMenuTreeItem, appContext: AppContext) {
    appContext.openScreen(item);
  }
}