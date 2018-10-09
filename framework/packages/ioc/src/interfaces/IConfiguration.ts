import { IAuthService, IBusinessService } from '@wface/ioc';

export default interface IConfiguration {
  title?: string,
  projectName: string,
  favicon?: string,

  screenList: { [key: string]: any };
  loginScreen?: any;

  authService: IAuthService;
  businessService: IBusinessService;
}