import { IMenuTreeItem, IConfiguration } from '../../';

export default interface AppContext {
    configuration: IConfiguration;
    menuTree: IMenuTreeItem[];
    openedScreens: ScreenData[];
    currentScreen: ScreenData | undefined;
    cache: { [key: string]: any };
    queryParams: { [key: string]: any };
    rightDrawerOpen: boolean;
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