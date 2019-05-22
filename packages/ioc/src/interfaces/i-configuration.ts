import IHttpService from './i-http-service';
import IAuthService from './i-auth-service';
import IAppHooks from './i-app-hooks';
import ISearchProvider from './i-search-provider';

export default interface IConfiguration {
  projectName: string,

  screenList: { [key: string]: any };
  rightContextItems?: { id: string, icon?: string, text: string, onClick: ((event: any) => void) | string }[];
  loginScreen?: any;

  authService?: { new(...args: any[]): IAuthService; };
  httpService?: { new(...args: any[]): IHttpService; };

  theme?: any;
  useLocalStorage?: boolean;
  hooks?: { new(...args: any[]): IAppHooks; };
  search?: boolean | { new(...args: any[]): ISearchProvider; };
}