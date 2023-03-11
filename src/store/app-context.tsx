import React, { FC, createContext, useMemo, useContext, useCallback, useState } from "react";
import { IMenuTreeItem, IConfiguration, MenuTreeUtil } from '..';
import Components from '../container/components';
import { UserContext, useUserContext } from "./user-context";

export interface AppContext {
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

const defaultData: AppContext = {
  configuration: {
    authRequired: true,
    projectName: 'WFace',
    components: Components,
  } as any,
  menuTree: [],
  openedScreens: [],
  currentScreen: undefined,
  cache: {},
  queryParams: {},
  rightDrawerOpen: false
}

const getDefaultData = (configuration: IConfiguration, userContextLogin: (values: UserContext) => void): AppContext => ({
  ...defaultData,
  configuration: {
    ...defaultData.configuration,
    ...configuration,
    components: {
      ...defaultData.configuration.components,
      ...configuration.components
    },
    authService: {
      ...configuration.authService,
      login: async (username: string, password: string, values?: any) => {
        try {
          const response = configuration.authService.login(username, password, values);
          userContextLogin({ ...values, username });

          if (configuration.hooks?.onLogin) {
            configuration.hooks.onLogin();
          }

          return response;
        }
        catch (e) {
          throw e;
        }
      },
    }
  }
});

interface AppContextValue extends AppContext {
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

const AppContextReact = createContext<AppContextValue>(defaultData as AppContextValue);

export const AppContextProvider: FC<{ children: React.ReactNode, configuration: IConfiguration }> = ({ children, configuration }) => {
  const userContext = useUserContext();
  const [data, setData] = useState<AppContext>(getDefaultData(configuration, userContext.login));

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

  const clear = useCallback(() => setData(prev => getDefaultData(configuration, userContext.login)), [configuration, userContext.login]);

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

        if (prev.configuration.singleScreen) {
          openedScreens = [screenData];
        }
        else {
          openedScreens.push(screenData);
        }
      }

      return { ...prev, openedScreens, currentScreen: screenData };
    });
  }, []);

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

  const value = useMemo<AppContextValue>(() => ({
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
