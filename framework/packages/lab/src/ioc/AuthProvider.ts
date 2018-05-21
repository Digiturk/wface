import {IAuthProvider} from '@wface/container';
import {injectable} from 'inversify';


@injectable()
class AuthProvider implements IAuthProvider {
    public readonly isLoggedIn: boolean = false;

    constructor() {
        alert("ok it's me");
    }

    public echo(msg: string): string {
        return "echo: " + msg;
    }
}

export default AuthProvider