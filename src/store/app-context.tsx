import React, { FC, createContext, useMemo, useContext, useCallback, useState } from "react";
import { IMenuTreeItem, IConfiguration, MenuTreeUtil } from '..';
import Components from '../container/components';
import menuSearchProvider from "../container/components/w-main-page/menu-search-provider";
import { useConfiguration } from "./config-context";
import { UserContext, useUserContext } from "./user-context";

export interface AppContextData {
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

const defaultData: AppContextData = {
  menuTree: [],
  openedScreens: [],
  currentScreen: undefined,
  cache: {},
  queryParams: {},
  rightDrawerOpen: false
}


export interface AppContext extends AppContextData {
  setValue: (key: string, value: any) => void,
  setMenuTree: (menuTree: IMenuTreeItem[]) => void,
  openScreen: (menuTreeItem: IMenuTreeItem, initialValues?: any) => void,
  closeScreen: (id: string) => void,
  changeScreenMode: (screenId: string, mode: ScreenData["mode"]) => void,
  setConfirmOnClose: (screenId: string, confirmOnClose: boolean, confirmOnCloseMessage: string) => void,
  setQueryParams: (queryParams: { [key: string]: any }) => void,
  toggleRightDrawer: (open?: boolean) => void,
  clear: () => void,
}

const AppContextReact = createContext<AppContext>(defaultData as AppContext);

export const AppContextProvider: FC<{ children: React.ReactNode, singleScreen: IConfiguration['singleScreen'] }> = ({ children, singleScreen }) => {
  const [data, setData] = useState<AppContextData>((defaultData));

  const changeScreenMode = useCallback((screenId: string, mode: ScreenData["mode"]) => {
    setData(prev => {
      const openedScreens = [...prev.openedScreens];
      const screen = openedScreens.find(a => a.menuTreeItem.id === screenId);
      if (screen) {
        screen.mode = mode;
      }

      return { ...prev, openedScreens };
    })
  }, []);

  const clear = useCallback(() => setData(defaultData), []);

  const closeScreen = useCallback((id: string) => {
    setData(prev => {
      let openedScreens = [...prev.openedScreens];
      const index = openedScreens.findIndex((item: any) => item.menuTreeItem.id == id);
      if (index > -1) {
        openedScreens.splice(index, 1);
      }

      let currentScreen = { ...prev.currentScreen } as AppContext['currentScreen'];
      if (currentScreen?.menuTreeItem?.id == id) {
        if (openedScreens.length == 0) {
          currentScreen = undefined;
        }
        else if (openedScreens.length - 1 >= index) {
          currentScreen = openedScreens[index];
        }
        else {
          currentScreen = openedScreens[index - 1];
        }
      }

      return { ...prev, openedScreens, currentScreen };
    });
  }, []);

  const openScreen = useCallback((menuTreeItem: IMenuTreeItem, initialValues?: any) => {
    setData(prev => {
      let openedScreens = [...prev.openedScreens];
      let screenData = openedScreens.find(a => a.menuTreeItem.id == menuTreeItem.id);
      if (screenData) {
        screenData.initialValues = Object.assign({}, menuTreeItem.initialValues, initialValues);
      }
      else {
        screenData = {
          menuTreeItem: menuTreeItem,
          values: {},
          state: undefined,
          initialValues: Object.assign({}, menuTreeItem.initialValues, initialValues),
          mode: 'normal',
          confirmOnClose: false,
          confirmOnCloseMessage: ''
        } as ScreenData;

        if (singleScreen) {
          openedScreens = [screenData];
        }
        else {
          openedScreens.push(screenData);
        }
      }

      return { ...prev, openedScreens, currentScreen: screenData };
    });
  }, [singleScreen]);

  const setConfirmOnClose = useCallback((screenId: string, confirmOnClose: boolean, confirmOnCloseMessage: string) => {
    setData(prev => {
      const openedScreens = [...prev.openedScreens];
      const screen = openedScreens.find(a => a.menuTreeItem.id === screenId);
      if (screen) {
        screen.confirmOnClose = confirmOnClose;
        screen.confirmOnCloseMessage = confirmOnCloseMessage;
      }

      return { ...prev, openedScreens };
    });
  }, []);

  const setMenuTree = useCallback((menuTree: IMenuTreeItem[]) => {
    setData(prev => {
      const openedScreens = [...prev.openedScreens];
      let currentScreen = prev.currentScreen;
      if (openedScreens.length == 0) {
        MenuTreeUtil.menuTreeForEach(menuTree, item => {
          if (item.isDefaultScreen) {
            openedScreens.push({
              menuTreeItem: item,
              values: {},
              state: undefined,
              initialValues: item.initialValues,
              mode: 'normal'
            } as ScreenData);
          }
          return false;
        });

        if (openedScreens.length > 0) {
          currentScreen = openedScreens[0];
        }
      }

      return { ...prev, menuTree, openedScreens, currentScreen };
    });
  }, []);

  const setQueryParams = useCallback((queryParams: { [key: string]: any }) => {
    setData(prev => ({ ...prev, queryParams }));
  }, []);

  const setValue = useCallback((key: string, value: any) => {
    setData(prev => ({ ...prev, cache: { ...prev.cache, [key]: value } }));
  }, []);

  const toggleRightDrawer = useCallback((open?: boolean) => {
    setData(prev => {
      let rightDrawerOpen = !prev.rightDrawerOpen;
      if (open !== undefined) {
        rightDrawerOpen = !!open;
      }

      return { ...prev, rightDrawerOpen };
    });
  }, []);

  const value = useMemo<AppContext>(() => ({
    ...data,
    changeScreenMode,
    clear,
    closeScreen,
    openScreen,
    setConfirmOnClose,
    setMenuTree,
    setQueryParams,
    setValue,
    toggleRightDrawer
  }), [data]);

  return (
    <AppContextReact.Provider value={value}>
      {children}
    </AppContextReact.Provider>
  );
}

export const useAppContext = () => useContext(AppContextReact);
