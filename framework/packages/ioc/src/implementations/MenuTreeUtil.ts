import { IMenuTreeItem } from '../interfaces/IAuthService';

export default class MenuTreeUtil {
  public static find(menuTree: IMenuTreeItem[], id: String): IMenuTreeItem {
    let result: IMenuTreeItem;
    this.menuTreeForEach(menuTree, item => {
      if (item.id == id) {
        result = item;
        return true;
      }
      return false;
    });

    return result;
  }

  public static findByName(menuTree: IMenuTreeItem[], project: String, screen: String) {
    let result: IMenuTreeItem;
    this.menuTreeForEach(menuTree, item => {
      if (item.project == project && item.screen == screen) {
        result = item;
        return true;
      }
      return false;
    });

    return result;
  }

  public static menuTreeForEach(menuTree: IMenuTreeItem[], callback: (item: IMenuTreeItem) => boolean) {
    for (let i = 0; i < menuTree.length; i++) {
      const item = menuTree[i];
      if (item.subNodes && item.subNodes.length > 0) {
        if (MenuTreeUtil.menuTreeForEach(item.subNodes, callback)) {
          break;
        }
      }
      else {
        if (callback(item)) {
          break;
        }
      }
    }
  }
}