import { IAuthService } from '@wface/ioc';
import IHttpService from './IHttpService';

type X = IAuthService

export default interface IConfiguration {
  title?: string,
  projectName: string,

  screenList: { [key: string]: any };
  loginScreen?: any;

  authService?: { new (...args: any[]): IAuthService; };
  httpService?: { new (...args: any[]): IHttpService; };

  theme?: any;
}