import { IAuthService, IUserContext } from '@wface/container';
import { Inject, Injectable } from 'react.di';


@Injectable
export default class MockAuthService implements IAuthService {    
    
    constructor(@Inject("IUserContext") private userContext: IUserContext) {        
    }

    public login(username: string, password: string) : Promise<boolean> {
        return new Promise((resolve, reject) => {
            if(username === "connection-error") {
                setTimeout(() => reject("Connection error"), 1000);
            }

            let result = true;

            if(username === "wrong-password") {
                result = false;
            }

            if(result) {
                this.userContext.setUserInfo('dtmebaran', 'mehmet baran');
            }

            setTimeout(() => resolve(result), 2500);
        });
    }
}