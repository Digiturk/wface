import { IMenuTreeItem, useAppContext, useUserContext } from 'wface';

export default () => {
  const appContext = useAppContext();
  const userContext = useUserContext();
  
  return {
    login: (username: string, password: string, values?: any): Promise<{ displayName: string, token?: string, data?: any }> => {
      return new Promise((resolve, reject) => {
        if (username === "connection-error") {
          setTimeout(() => reject("Connection error"), 1000);
        }

        if (username === "wrong-password") {
          setTimeout(() => reject("Wrong username or password"), 1000);
        }

        setTimeout(() => resolve({
          displayName: 'MockUser',
          token: 'MockToken',
          data: {
            name: 'MockName',
            surname: 'MockSurname'
          }
        }), 1500);
      });
    },

    getMenuTree: (): Promise<IMenuTreeItem[]> => {
      return new Promise((resolve, reject) => {
        const result: IMenuTreeItem[] = [];
        let id = 0;
        result.push({
          id: (++id).toString(),
          text: 'DemoScreen',
          screen: 'DemoScreen',
          icon: 'save'
        });
        result.push({
          id: (++id).toString(),
          text: 'DemoScreen2',
          screen: 'DemoScreen2'
        });
        result.push({
          id: (++id).toString(),
          text: 'DemoScreen3',
          screen: 'DemoScreen3'
        });
        result.push({
          id: (++id).toString(),
          text: 'DemoScreen4',
          screen: 'DemoScreen4'
        });
        result.push({
          id: (++id).toString(),
          text: 'DemoScreen5',
          screen: 'DemoScreen5'
        });
        result.push({
          id: (++id).toString(),
          text: 'EmptyScreen',
          screen: 'EmptyScreen'
        });
        result.push({
          id: 'settings',
          text: 'Settings',
          screen: 'SettingsScreen2',
          hideOnNavigationList: true
        });
        setTimeout(() => resolve(result), 1000);
      });
    }
  }
};