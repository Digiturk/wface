export default interface IAuthService {
    login(username: string, password: string, callback: (result: boolean) => void): void
}