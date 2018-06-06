export default interface UserContext {
    readonly displayName?: string;
    readonly isLoggedIn?: boolean;
    readonly token?: string;
    readonly username?: string;
}
