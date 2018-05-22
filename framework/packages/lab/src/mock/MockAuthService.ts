import { IAuthService } from '@wface/container';
import { Injectable } from 'react.di';


@Injectable
export default class MockAuthService implements IAuthService {
    public isLoggedIn: boolean = false;

    public login(username: string, password: string, callback: (result:boolean) => void): void {
        let result = false;

        if(!(username === "a" && password === "a")) {
            result = true;
        }

        if(callback) {
            this.isLoggedIn = true;
            callback(result);
        }
    }
}