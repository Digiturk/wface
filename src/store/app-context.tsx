import React, { FC, createContext, useMemo, useContext, useCallback, useState } from "react";
import { useNavigate } from "react-router";
import { IMenuTreeItem, MenuTreeUtil } from '..';

export type ScreenMode = "loading" | "normal";
export interface AppContextData {
  menuTree: IMenuTreeItem[];
  cache: { [key: string]: any };
  queryParams: { [key: string]: any };
  rightDrawerOpen: boolean;
  screenMode: ScreenMode;
}

const defaultData: AppContextData = {
  menuTree: [],
  cache: {},
  queryParams: {},
  rightDrawerOpen: false,
  screenMode: 'normal'
}


export interface AppContext extends AppContextData {
  setValue: (key: string, value: any) => void,
  setMenuTree: (menuTree: IMenuTreeItem[]) => void,
  openScreen: (menuTreeItem: IMenuTreeItem, initialValues?: any) => void,
  openScreenById: (id: string, initialValues?: any) => boolean,
  changeScreenMode: (mode: ScreenMode) => void,
  setQueryParams: (queryParams: { [key: string]: any }) => void,
  toggleRightDrawer: (open?: boolean) => void,
  clear: () => void,
}

const AppContextReact = createContext<AppContext>(defaultData as AppContext);

export const AppContextProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<AppContextData>((defaultData));
  const navigate = useNavigate();

  const changeScreenMode = useCallback((screenMode: ScreenMode) => setData(prev => ({ ...prev, screenMode })), []);

  const clear = useCallback(() => setData(defaultData), []);

  const openScreen = useCallback((menuTreeItem: IMenuTreeItem, initialValues?: any) => {
    navigate('/main/' + menuTreeItem.screen);
  }, []);

  const openScreenById = useCallback((id: string, initialValues?: any): boolean => {
    const menuTreeItem = MenuTreeUtil.find(data.menuTree, id);
    if (menuTreeItem) {
      openScreen(menuTreeItem, initialValues);
      return true;
    }

    return false;
  }, [openScreen, data.menuTree]);

  const setMenuTree = useCallback((menuTree: IMenuTreeItem[]) => setData(prev => ({ ...prev, menuTree })), []);

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
    openScreen,
    openScreenById,
    setMenuTree,
    setQueryParams,
    setValue,
    toggleRightDrawer
  }), [
    data, changeScreenMode, clear, openScreen,
    openScreenById, setMenuTree, setQueryParams,
    setValue, toggleRightDrawer
  ]);

  return (
    <AppContextReact.Provider value={value}>
      {children}
    </AppContextReact.Provider>
  );
}

export const useAppContext = () => useContext(AppContextReact);
