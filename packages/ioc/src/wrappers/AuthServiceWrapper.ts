import IAuthService, { IMenuTreeItem } from '../interfaces/IAuthService';
import { injectable, inject } from "inversify";

@injectable()
export default class AuthServiceWrapper implements IAuthService {
  
  @inject("IAuthServiceInner") private _Service: IAuthService;
  @inject("onLogin") private _OnLogin: (username:string, displayName: string, token?: string) => void;

  login(username: string, password: string, values?: any): Promise<{ displayName: string, token?: string }> {
    return new Promise((resolve, reject) => {
      this._Service.login(username, password, values) 
        .then(result => {
          this._OnLogin(username, result.displayName, result.token);
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