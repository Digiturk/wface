import { IMenuTreeItem, IConfiguration } from '@wface/ioc';

export default interface AppContext {
    configuration: IConfiguration;
    menuTree: IMenuTreeItem[];
    openedScreens: ScreenData[];
    currentScreen?: ScreenData;
    cache: { [key: string]: any };
}

export interface ScreenData {
  menuTreeItem: IMenuTreeItem;
  state: any;
  initialValues: any;
  values: { [key: string]: any };
  mode: 'normal' | 'loading';
  confirmOnClose: boolean;
  confirmOnCloseMessage: string;
}