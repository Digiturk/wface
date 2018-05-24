import { IAuthService, IMenuTree, IUserContext } from '@wface/container';
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

    public getMenuTree(): Promise<IMenuTree[]> {        

        return new Promise((resolve, reject) => {
            // setTimeout(() => reject(''), 1000);

            const tree: IMenuTree[] = [
                {
                    id: "1",
                    target: 'system/dashboard',
                    text:'Dashboard'                                        
                },
                {
                    id: "2",
                    target: 'system/inbox',
                    text:'Inbox'
                },
                {
                    id: "3",
                    subNodes: [
                        {
                            id: "3.1",
                            target: 'crm/screen1',
                            text: 'Crm Ekran 1'
                        },
                        {
                            id: "3.2",
                            target: 'crm/screen2',
                            text: 'Crm Ekran 2'
                        }
                    ],
                    text: 'CRM',                    
                },
                {
                    id: "4",
                    subNodes: [
                        {
                            id: "4.1",
                            target: 'billing/screen1',
                            text: 'Billing Ekran 1'
                        },
                        {
                            id: "4.2",
                            target: 'billing/screen2',
                            text: 'Billing Ekran 2'
                        },
                        {
                            id: "4.3",
                            subNodes: [
                                {
                                    id: "4.3.1",
                                    target: 'crm/screen1',
                                    text: 'Crm Ekran 1'
                                },
                                {
                                    id: "4.3.2",
                                    target: 'crm/screen2',
                                    text: 'Crm Ekran 2'
                                }
                            ],
                            text: 'Billing Ekran 3', 
                        }
                    ],
                    text: 'Billing',                    
                }
            ]
            
            setTimeout(() => resolve(tree), 1200);
        });
    }
}