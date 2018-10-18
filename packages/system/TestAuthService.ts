import { IAuthService, IMenuTreeItem } from '@wface/ioc';

export default class TestAuthService implements IAuthService {

  login(username: string, password: string, values?: any): Promise<{ displayName: string; token?: string; }> {
    return new Promise((resolve, reject) => {
      if(username == "mehmet" && password == "baran") {
        resolve({displayName: 'MEHMET BARAN', token: 'token'});
      }

      reject("Bişeyler yanlış");
    });
  }  
  
  getMenuTree(): Promise<IMenuTreeItem[]> {
    return new Promise((resolve, reject) => {
      resolve([]);
    });
  }

  
}