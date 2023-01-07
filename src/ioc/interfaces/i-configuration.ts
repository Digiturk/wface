import IHttpService from './i-http-service';
import IComponents from './i-components';
import IAuthService from './i-auth-service';
import IAppHooks from './i-app-hooks';
import ISearchProvider from './i-search-provider';
import { WTheme } from '../../components';
import { RecursivePartial } from '../..';

export default interface IConfiguration {
  projectName: string,
  components?: IComponents;

  screenList: { [key: string]: any };
  rightContextItems?: { id: string, icon?: string, text: string, onClick?: ((event: any) => void) | string }[];
  customToolbarComponent?: any;
  rightDrawer?: {
    buttonIcon?: string;
    buttonComponent?: any;
    contentComponent?: any;
    contentBoxStyle?: any;
  };

  authRequired?: any;
  authService?: { new(...args: any[]): IAuthService; };
  httpService?: { new(...args: any[]): IHttpService; };

  theme?: RecursivePartial<WTheme>;
  useLocalStorage?: boolean;
  hooks?: { new(...args: any[]): IAppHooks; };
  search?: boolean | { new(...args: any[]): ISearchProvider; };
  singleScreen?: boolean;
}