import { IMenuTreeItem } from '../interfaces/i-auth-service';

export default class MenuTreeUtil {
  public static find(menuTree: IMenuTreeItem[], id: String): IMenuTreeItem {
    let result: IMenuTreeItem;;
    this.menuTreeForEach(menuTree, item => {
      if (item.id == id) {
        result = item;
        return true;
      }
      return false;
    });

    // @ts-ignore
    return result;
  }

  public static findByName(menuTree: IMenuTreeItem[], screen: String) {
    let result: IMenuTreeItem;
    this.menuTreeForEach(menuTree, item => {
      if (item.screen == screen) {
        result = item;
        return true;
      }
      return false;
    });

    // @ts-ignore
    return result;
  }

  public static menuTreeForEach(menuTree: IMenuTreeItem[], callback: (item: IMenuTreeItem) => boolean) {
    for (let i = 0; i < menuTree.length; i++) {
      const item = menuTree[i];
      if (item.subNodes && item.subNodes.length > 0) {
        if(item.screen) {
          if(callback(item)) {
            break;
          }
        }
        MenuTreeUtil.menuTreeForEach(item.subNodes, callback)
      }
      else {
        if (callback(item)) {
          break;
        }
      }
    }
  }
}