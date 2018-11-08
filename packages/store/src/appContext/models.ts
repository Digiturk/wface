import { IMenuTreeItem, IConfiguration } from '@wface/ioc';

export default interface AppContext {
    configuration: IConfiguration;
    menuTree: IMenuTreeItem[];
    openedScreens: ScreenData[];
    currentScreen?: ScreenData;
}

export interface ScreenData {
  menuTreeItem: IMenuTreeItem
  state: any,
  initialValues: any,
  values: { [key: string]: any }
}