import IAuthService, { IMenuTreeItem } from '../interfaces/IAuthService';

export default class DefaultAuthService implements IAuthService {
  
  private _Service: IAuthService;
  private _OnLogin: (username:string, displayName: string, token?: string) => void;

  constructor(service: IAuthService, onLogin: (username:string, displayName: string, token?: string) => void,
  ) { 
    this._Service = service;
    this._OnLogin = onLogin;
  }

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