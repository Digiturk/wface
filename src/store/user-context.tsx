import React, { FC, createContext, useMemo, useContext, useCallback, useState } from "react";

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

export const UserContextProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<UserContext>(defaultData);

  const login = useCallback((values: UserContext) => {
    setData(prev => ({ ...prev, ...values, isLoggedIn: true }));
  }, [data]);

  const logout = useCallback(() => setData(defaultData), []);

  const value = useMemo<UserContextValue>(() => ({
    ...data,
    login,
    logout
  }), [data]);

  return (
    <UserContextReact.Provider value={value}>
      {children}
    </UserContextReact.Provider>
  );
}

export const useUserContext = () => useContext(UserContextReact);
