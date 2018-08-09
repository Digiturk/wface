import { IScreenProvider } from '@wface/ioc';
import { Injectable } from 'react.di';
import Projects from './GeneratedCode';

@Injectable
export default class MockScreenProvider implements IScreenProvider {
  private cache: {
    [key: string]: any
  } = {};

  public getScreen(project: string, screen: string): Promise<object> {
    return new Promise((resolve, reject) => {
      const screenKey = project + "/" + screen;

      if (this.cache[screenKey]) {
        resolve(this.cache[screenKey]);
      }
      else {
        const projectName = this.getRealName(Projects, project)
        if (projectName) {
          const screenName = this.getRealName(Projects[projectName], screen);
          if (screenName) {
            this.cache[screenKey] = Projects[projectName][screenName];
            resolve(this.cache[screenKey]);
          }
        }
      }
    });
  }

  private getRealName(object: any, indexer: string): string {
    const compare = this.getComparableString(indexer);
    for (var prop in object) {
      if (this.getComparableString(prop) === compare) {
        return prop;
      }
    }

    return null;
  }

  private getComparableString(text: string): string {
    return text
      .toLowerCase()
      .replace("-", "")
      .replace("/", "")
      .replace("@", "");
  }
}