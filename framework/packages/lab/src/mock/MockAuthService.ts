import { IAuthService, IUserContext } from '@wface/container';
import { Inject, Injectable } from 'react.di';


@Injectable
export default class MockAuthService implements IAuthService {    
    
    
    constructor(
        @Inject("IUserContext") private userContext: IUserContext
    ) {        
    }

    public login(username: string, password: string, callback: (result:boolean) => void): void {
        let result = false;

        if(!(username === "a" && password === "a")) {
            result = true;
        }

        if(callback) {      
            this.userContext.setUserInfo('dtmebaran', 'mehmet baran');
            setTimeout(() => callback(result),
            2500);
        }
    }
}