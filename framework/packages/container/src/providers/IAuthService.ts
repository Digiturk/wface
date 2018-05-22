export default interface IAuthService {
    isLoggedIn: boolean;
    login(username: string, password: string, callback: (result: boolean) => void): void
}