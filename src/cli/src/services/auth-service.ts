import { IAuthService, IMenuTreeItem, UserContext } from '../../../';
import { injectable, inject } from "inversify";

@injectable()
export default class AuthService implements IAuthService {

  @inject("UserContext") userContext!: UserContext;

  public login(username: string, password: string, values?: any): Promise<{ displayName: string, token?: string }> {
    return new Promise((resolve, reject) => {
      if (username === "connection-error") {
        setTimeout(() => reject("Connection error"), 1000);
      }

      if (username === "wrong-password") {
        setTimeout(() => reject("Wrong username or password"), 1000);
      }

      setTimeout(() => resolve({ displayName: 'MockUser', token: 'MockToken' }), 1500);
    });
  }

  public getMenuTree(): Promise<IMenuTreeItem[]> {

    return new Promise((resolve, reject) => {
      const result: IMenuTreeItem[] = [];
      let id = 0;
      result.push({
        id: (++id).toString(),
        text: 'DemoScreen1',
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
        text: 'DemoScreen7',
        screen: 'DemoScreen7'
      });
      result.push({
        id: (++id).toString(),
        text: 'DemoScreen8',
        screen: 'DemoScreen8'
      });
      // for(let i = 3; i < 20; i++) {
      //   result.push({
      //     id: i.toString(),
      //     text: 'DemoScreen' + i,
      //     screen: 'DemoScreen2'
      //   });
      // }
      setTimeout(() => resolve(result), 1000);
    });
  }
}