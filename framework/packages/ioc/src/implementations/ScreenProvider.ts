import IScreenProvider from '../interfaces/IScreenProvider';
import IProjectConfiguration from '../interfaces/IProjectConfiguration';

export default class ScreenProvider implements IScreenProvider {
  private cache: {
    [key: string]: any
  } = {};

  private projects: {[key: string]: IProjectConfiguration} = null;
  
  constructor(projects: {[key: string]: IProjectConfiguration}) {
    this.projects = projects;    
  }

  public getScreen(project: string, screen: string): Promise<object> {
    return new Promise((resolve, reject) => {
      const screenKey = project + "/" + screen;

      if (this.cache[screenKey]) {
        resolve(this.cache[screenKey]);
      }
      else {
        const projectName = this.getRealName(this.projects, project)
        if (projectName) {
          const screenName = this.getRealName(this.projects[projectName].screenList, screen);
          if (screenName) {
            this.cache[screenKey] = this.projects[projectName].screenList[screenName];
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