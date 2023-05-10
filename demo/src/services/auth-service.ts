import { useCallback, useEffect, useMemo } from "react";
import { IMenuTreeItem, useAppContext, useUserContext } from "wface";
import { CMSScreens, CRMScreens } from "./routes";

export default () => {
  const appContext = useAppContext();
  const userContext = useUserContext();

  const initScreen = useMemo(() => CMSScreens, []);

  useEffect(() => {
    if (appContext.cache.screenMode == "CMS") {
      appContext.setMenuTree(CMSScreens);
    } else {
      appContext.setMenuTree(CRMScreens);
    }
  }, [appContext.cache.screenMode]);

  const login = useCallback(
    (
      username: string,
      password: string,
      values?: any
    ): Promise<{ displayName: string; token?: string; data?: any }> => {
      return new Promise((resolve, reject) => {
        if (username === "connection-error") {
          setTimeout(() => reject("Connection error"), 1000);
        }

        if (username === "wrong-password") {
          setTimeout(() => reject("Wrong username or password"), 1000);
        }

        setTimeout(
          () =>
            resolve({
              displayName: "MockUser",
              token: "MockToken",
              data: {
                name: "MockName",
                surname: "MockSurname",
              },
            }),
          1500
        );
      });
    },
    []
  );

  const getMenuTree = useCallback((): Promise<IMenuTreeItem[]> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(initScreen);
      }, 1000);
    });
  }, []);

  return {
    login,
    getMenuTree,
  };
};
