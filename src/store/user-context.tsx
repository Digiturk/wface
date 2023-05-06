import React, { FC, createContext, useMemo, useContext, useCallback, useState, useEffect } from "react";
import { IConfiguration } from "..";
import { useStorage } from "../hooks";

const STORAGE_KEY = 'USER_CONTEXT';

export interface UserContext {
  readonly displayName?: string;
  readonly isLoggedIn?: boolean;
  readonly token?: string;
  readonly username?: string;
  readonly data?: any;
}

const defaultData: UserContext = {
  isLoggedIn: false,
  username: '',
  displayName: '',
  token: '',
  data: null
}

interface UserContextValue extends UserContext {
  login: (values: UserContext) => void,
  logout: () => void,
}

const UserContextReact = createContext<UserContextValue>(defaultData as UserContextValue);

interface UserContextProviderProps {
  children: React.ReactNode, 
  useLocalStorage: IConfiguration["useLocalStorage"],
  projectName: IConfiguration["projectName"];
}

export const UserContextProvider: FC<UserContextProviderProps> = ({ children, useLocalStorage, projectName }) => {
  const storageKey = STORAGE_KEY + "_" + (projectName || 'wface');
  const storage = useStorage(useLocalStorage ? 'local' : 'session');
  const storageData = storage.get<UserContext>(storageKey);
  const [data, setData] = useState<UserContext>(storageData || defaultData);

  const handleChangeData = useCallback((newData: UserContext) => {
    setData(prev => {
      const value = { ...prev, ...newData };
      storage.set(storageKey, value);
      return value;
    });
  }, []);

  const login = useCallback((values: UserContext) => {
    handleChangeData({ ...values, isLoggedIn: true })
  }, [handleChangeData]);

  const logout = useCallback(() => handleChangeData(defaultData), [handleChangeData]);

  const value = useMemo<UserContextValue>(() => ({
    ...data,
    login,
    logout
  }), [data, login, logout]);

  return (
    <UserContextReact.Provider value={value}>
      {children}
    </UserContextReact.Provider>
  );
}

export const useUserContext = () => useContext(UserContextReact);
