import IAuthService, { IMenuTreeItem } from '../interfaces/i-auth-service';
import { injectable, inject } from "inversify";
import { IOC } from '../..';
import IAppHooks from '../interfaces/i-app-hooks';

@injectable()
export default class AuthServiceWrapper implements IAuthService {

  @inject("IAuthServiceInner") private _Service!: IAuthService;
  @inject("onLogin") private _OnLogin!: (username: string, displayName: string, token?: string) => void;

  login(username: string, password: string, values?: any): Promise<{ displayName: string, token?: string }> {
    return new Promise((resolve, reject) => {
      this._Service.login(username, password, values)
        .then(result => {
          this._OnLogin(username, result.displayName, result.token);

          if (IOC.isBound("IAppHooks")) {
            const hooks = IOC.get<IAppHooks>("IAppHooks");
            hooks.onLogin && hooks.onLogin();
          }

          resolve(result);
        }).
        catch(reason => {
          reject(reason);
        });
    });
  }

  getMenuTree(): Promise<IMenuTreeItem[]> {
    return this._Service.getMenuTree();
  }
}