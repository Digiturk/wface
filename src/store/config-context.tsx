import React, { FC, createContext, useMemo, useContext, useCallback, useState } from "react";
import { IMenuTreeItem, IConfiguration, MenuTreeUtil } from '..';
import Components from '../container/components';
import menuSearchProvider from "../container/components/w-main-page/menu-search-provider";
import { UserContext, useUserContext } from "./user-context";

const defaultData: IConfiguration = {
  authRequired: true,
  projectName: 'WFace',
  components: Components,
} as any;

const getDefaultData = (configuration: IConfiguration): IConfiguration => ({
  ...defaultData,
  ...configuration,
  components: {
    ...defaultData.components,
    ...configuration.components
  },
  useAuthService: () => {
    const authService = configuration.useAuthService();
    const userContext = useUserContext();

    const result = useMemo(() => ({
      ...authService,
      login: async (username: string, password: string, values?: any) => {
        try {
          const response = await authService.login(username, password, values);
          userContext.login({ ...values, username, ...response });

          if (configuration.hooks?.onLogin) {
            configuration.hooks.onLogin();
          }

          return response;
        }
        catch (e) {
          throw e;
        }
      }
    }), [authService, userContext.login]);

    return result;
  },
  searchProvider: {
    ...menuSearchProvider,
    ...configuration.searchProvider
  }
});

const ConfigContextReact = createContext<IConfiguration>(defaultData as IConfiguration);

export const ConfigContextProvider: FC<{ children: React.ReactNode, configuration: IConfiguration }> = ({ children, configuration }) => {
  const value = useMemo(() => getDefaultData(configuration), []);

  return (
    <ConfigContextReact.Provider value={value}>
      {children}
    </ConfigContextReact.Provider>
  );
}

export const useConfiguration = () => useContext(ConfigContextReact);
