import { IAuthService } from '@wface/ioc';
import IHttpService from './IHttpService';

export default interface IConfiguration {
  title?: string,
  projectName: string,

  screenList: { [key: string]: any };
  loginScreen?: any;

  authService?: IAuthService;
  httpService?: IHttpService;

  theme?: any;
}