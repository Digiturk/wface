import { IUserContext } from '@wface/container';
export default class MockUserContext implements IUserContext {
    isLoggedIn: boolean;
    username: string;
    displayName: string;
    setUserInfo(username: string, displayName: string): void;
}
