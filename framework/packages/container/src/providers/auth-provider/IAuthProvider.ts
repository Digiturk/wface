interface IAuthProvider {
    readonly isLoggedIn: boolean;
    echo(msg: string): string;
}

export default IAuthProvider