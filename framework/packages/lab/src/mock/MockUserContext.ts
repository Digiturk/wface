import { IUserContext } from '@wface/container';
import { Injectable } from 'react.di';

@Injectable 
export default class MockUserContext implements IUserContext {
    public isLoggedIn: boolean = true; // default false olmalı
    public username: string = 'dtmebaran';
    public displayName: string = 'mehmet baran';  

    public setUserInfo(username: string, displayName: string) {
        this.isLoggedIn = true;
        this.username = username;
        this.displayName = displayName;
    }        
}