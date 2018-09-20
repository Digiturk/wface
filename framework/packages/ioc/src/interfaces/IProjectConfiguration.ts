import IBusinessService from './IBusinessService';
import IAuthService from './IAuthService';

export default interface IProjectConfiguration {
  title: string,
  projectName: string,
  favicon?: string,

  screenList: { [key: string]: any };
  loginScreen?: any;

  authServiceType: any;
  businessServiceType: any;
}