import IAuthService, { IMenuTreeItem } from '../interfaces/IAuthService';
import { Inject, Injectable } from 'react.di';

@Injectable
export default class DefaultAuthService implements IAuthService {
  
  constructor(
    @Inject('IAuthServiceInner') private _Service: IAuthService,
    @Inject('onLogin') private _OnLogin: (username:string, displayName: string, token?: string) => void,
  ) { }

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