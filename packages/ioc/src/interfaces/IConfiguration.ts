import IHttpService from './IHttpService';
import IAuthService from './IAuthService';

type X = IAuthService

export default interface IConfiguration {
  projectName: string,

  screenList: { [key: string]: any };
  loginScreen?: any;

  authService?: { new (...args: any[]): IAuthService; };
  httpService?: { new (...args: any[]): IHttpService; };

  theme?: any;
}