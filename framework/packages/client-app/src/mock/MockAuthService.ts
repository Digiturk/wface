import { IAuthService, IMenuTreeItem } from '@wface/ioc';
import { Injectable } from 'react.di';
import Projects from '../helpers/GeneratedCode';

@Injectable
export default class MockAuthService implements IAuthService {

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
      // setTimeout(() => reject(''), 1000);

      const result:IMenuTreeItem[] = [];
      let id = 0;
      for(let projectName in Projects) {
        const menu:IMenuTreeItem = {
          id: (id++).toString(),
          text: projectName,
          subNodes: []
        };

        const project = Projects[projectName];
        for(let screenName in project.screenList) {
          menu.subNodes.push({
            id: (id++).toString(),
            text: screenName,
            project: projectName,
            screen: screenName
          } as IMenuTreeItem)
        }
        result.push(menu);
      }

      setTimeout(() => resolve(result), 1200);
    });
  }
}