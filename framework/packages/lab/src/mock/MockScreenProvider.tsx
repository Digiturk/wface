import { IScreenProvider } from '@wface/ioc';
import * as system from '@wface/system';
import * as React from 'react';
import { Injectable } from 'react.di';


@Injectable
export default class MockScreenProvider implements IScreenProvider {
    private projects = {
        system
    }

    public getScreen(project: string, screen : string) {
        if(this.projects[project]) {
            /* tslint:disable:no-string-literal */
            return this.projects[project][screen];
            /* tslint:enable:no-string-literal */
        }        
    }
}