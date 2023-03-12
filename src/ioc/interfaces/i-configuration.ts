import IComponents from './i-components';
import { IMenuTreeItem } from './i-auth-service';
import { WTheme } from '../../components';
import { RecursivePartial } from '../..';
import { AppContext } from '../../store';

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
  authService: {
    login(username: string, password: string, values?: any): Promise<{ displayName: string, token?: string }>;
    getMenuTree(): Promise<IMenuTreeItem[]>;
  }
  api: {
    baseUrl: string;
    useToken: () => string;
  }
  theme?: RecursivePartial<WTheme>;
  useLocalStorage?: boolean;
  hooks?: {
    onAppDidMount?(): void;
    onAppWillUnmount?(): void;
    onLogin?(): void;
    onLogout?(): void;
  };
  search?: boolean;
  searchProvider?: {
    search: (term: string, appContext: AppContext) => Promise<any[]>;
    renderSearchItem: (item: any, appContext: AppContext) => React.ReactNode;
    onItemSelected: (item: any, appContext: AppContext) => void;
  };
  singleScreen?: boolean;
}