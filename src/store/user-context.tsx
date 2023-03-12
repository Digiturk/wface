import React, { FC, createContext, useMemo, useContext, useCallback, useState, useEffect } from "react";
import { IConfiguration } from "..";
import { useStorage } from "../hooks";

const STORAGE_KEY = 'USER_CONTEXT';

export interface UserContext {
  readonly displayName?: string;
  readonly isLoggedIn?: boolean;
  readonly token?: string;
  readonly username?: string;
}

const defaultData: UserContext = {
  isLoggedIn: false,
  username: '',
  displayName: ''
}

interface UserContextValue extends UserContext {
  login: (values: UserContext) => void,
  logout: () => void,
}

const UserContextReact = createContext<UserContextValue>(defaultData as UserContextValue);

export const UserContextProvider: FC<{ children: React.ReactNode, configuration: IConfiguration }> = ({ children, configuration }) => {
  const storage = useStorage(configuration.useLocalStorage ? 'local' : 'session');
  const storageData = storage.get<UserContext>(STORAGE_KEY);
  const [data, setData] = useState<UserContext>(storageData || defaultData);

  const handleChangeData = useCallback((newData: UserContext) => {
    setData(prev => {
      const value = { ...prev, ...newData };
      storage.set(STORAGE_KEY, value);
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
