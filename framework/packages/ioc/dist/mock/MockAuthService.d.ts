import { IAuthService, IMenuTree, IUserContext } from '@wface/container';
export default class MockAuthService implements IAuthService {
    private userContext;
    constructor(userContext: IUserContext);
    login(username: string, password: string): Promise<boolean>;
    getMenuTree(): Promise<IMenuTree[]>;
}
