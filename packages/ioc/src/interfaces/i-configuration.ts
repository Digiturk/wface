import IHttpService from './i-http-service';
import IAuthService from './i-auth-service';
import IAppHooks from './i-app-hooks';

type X = IAuthService

export default interface IConfiguration {
  projectName: string,

  screenList: { [key: string]: any };
  loginScreen?: any;

  authService?: { new (...args: any[]): IAuthService; };
  httpService?: { new (...args: any[]): IHttpService; };

  theme?: any;
  useLocalStorage?: boolean;
  hooks?: { new (...args: any[]): IAppHooks; };
}