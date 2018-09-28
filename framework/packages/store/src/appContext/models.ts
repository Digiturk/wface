import { IMenuTreeItem } from '@wface/ioc';

export default interface AppContext {
    menuTree: IMenuTreeItem[];
    openedScreens: ScreenData[];
    currentScreen?: ScreenData;
}

export interface ScreenData {
  menuTreeItem: IMenuTreeItem
  state: any,
  initialValues: Object,
  values: { [key: string]: any }
}