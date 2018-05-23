export default interface IUserContext {
    readonly isLoggedIn: boolean;
    readonly username: string;
    readonly displayName: string;    

    setUserInfo(username: string, displayName: string): void;
}