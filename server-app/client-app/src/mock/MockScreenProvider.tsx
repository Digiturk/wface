import { IScreenProvider } from '@wface/ioc';
import * as React from 'react';
import { Injectable } from 'react.di';

@Injectable
export default class MockScreenProvider implements IScreenProvider {
    private projects = {
    }

    public getScreen(project: string, screen: string) : Promise<object> {
        return new Promise((resolve, reject) => {
            if(this.projects[project]) {
                resolve(this.projects[project][screen]);
            }
            else {
                import("@wface/" + project)
                    .then(prj => {                        
                        this.projects[project] = prj;
                        resolve(this.projects[project][screen]);
                    })
                    .catch(reason => {
                        reject(reason);
                    })
            }
        });
    }
}