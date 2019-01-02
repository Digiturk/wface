import { IAuthService, IMenuTreeItem } from '@wface/ioc';
import { injectable, inject } from "inversify";
import { UserContext } from '@wface/store';

@injectable()
export default class AuthService implements IAuthService {

  @inject("UserContext") userContext : UserContext;

  public login(username: string, password: string, values?: any): Promise<{ displayName: string, token?: string }> {
    return new Promise((resolve, reject) => {
      if (username === "connection-error") {
        setTimeout(() => reject("Connection error"), 1000);
      }

      if (username === "wrong-password") {
        setTimeout(() => reject("Wrong username or password"), 1000);
      }

      setTimeout(() => resolve({displayName: 'MockUser', token: 'MockToken'}), 1500);
    });
  }

  public getMenuTree(): Promise<IMenuTreeItem[]> {

    return new Promise((resolve, reject) => {
      const result:IMenuTreeItem[] = [];
      let id = 0;
      result.push({
        id: (++id).toString(),
        text: 'DemoScreen',
        screen: 'DemoScreen'
      });    
      result.push({
        id: (++id).toString(),
        text: 'DemoScreen2',
        screen: 'DemoScreen2'
      });
      setTimeout(() => resolve(result), 1200);
    });
  }
}