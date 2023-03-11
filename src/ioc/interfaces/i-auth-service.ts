export interface IMenuTreeItem {
  id: string,
  text: string;
  icon?: string;
  divideBefore?: boolean;
  screen?: string;
  subNodes?: IMenuTreeItem[];
  isDefaultScreen?: boolean;
  notClosable?: boolean;
  hideOnNavigationList?: boolean;
  initialValues?: any;
}