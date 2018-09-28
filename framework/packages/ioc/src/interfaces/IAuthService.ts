export default interface IAuthService {
  login(username: string, password: string, values?: any): Promise<{ displayName: string, token?: string }>
  getMenuTree(): Promise<IMenuTreeItem[]>
}

export interface IMenuTreeItem {
  id: string,
  text: string;
  icon?: string;
  divideBefore?: boolean;
  project?: string;
  screen?: string;
  subNodes?: IMenuTreeItem[];
  isDefaultScreen?: boolean;
  notClosable?: boolean;
  hideOnNavigationList?: boolean;
  initialValues?: Object;
}