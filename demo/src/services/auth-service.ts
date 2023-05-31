import { useCallback } from "react";
import { IMenuTreeItem, useAppContext, useUserContext } from "wface";

export default () => {
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

      const result: IMenuTreeItem[] = [
        {
          id: "DemoScreen",
          text: "DemoScreen",
          screen: "DemoScreen",
          icon: "save",
        },
        {
          id: "DemoScreen2",
          text: "DemoScreen2",
          screen: "DemoScreen2",
        },
        {
          id: "DemoScreen3",
          text: "DemoScreen3",
          screen: "DemoScreen3",
          isDefaultScreen: true
        },
        {
          id: "DemoScreen4",
          text: "DemoScreen4",
          screen: "DemoScreen4",
        },
        {
          id: "DemoScreen5",
          text: "DemoScreen5",
          screen: "DemoScreen5",
        },
        {
          id: "EmptyScreen",
          text: "EmptyScreen",
          screen: "EmptyScreen",
        },
        {
          id: "Settings",
          text: "Settings",
          screen: "SettingsScreen2",
          hideOnNavigationList: true,
        },
        {
          id: "Nested",
          text: "Nested",
          screen: "SettingsScreen2",
          subNodes: [
            {
              id: "SubDemoScreen",
              text: "SubDemoScreen",
              screen: "DemoScreen",
            },
            {
              id: "SubDemoScreen2",
              text: "SubDemoScreen2",
              screen: "DemoScreen2",
            },
          ],
        },
      ];
      setTimeout(() => {
        resolve(result);
      }, 1000);
    });
  }, []);

  return {
    login,
    getMenuTree,
  };
};
