export default interface IAuthService {
    login(username: string, password: string): Promise<boolean>
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
}