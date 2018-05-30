"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_di_1 = require("react.di");
let MockAuthService = class MockAuthService {
    constructor(userContext) {
        this.userContext = userContext;
    }
    login(username, password) {
        return new Promise((resolve, reject) => {
            if (username === "connection-error") {
                setTimeout(() => reject("Connection error"), 1000);
            }
            let result = true;
            if (username === "wrong-password") {
                result = false;
            }
            if (result) {
                this.userContext.setUserInfo('dtmebaran', 'mehmet baran');
            }
            setTimeout(() => resolve(result), 2500);
        });
    }
    getMenuTree() {
        return new Promise((resolve, reject) => {
            // setTimeout(() => reject(''), 1000);
            const tree = [
                {
                    icon: 'send',
                    id: "1",
                    target: '/system/dashboard',
                    text: 'Dashboard',
                },
                {
                    icon: 'send',
                    id: "2",
                    target: '/system/inbox',
                    text: 'Inbox'
                },
                {
                    divideBefore: true,
                    icon: 'send',
                    id: "3",
                    subNodes: [
                        {
                            icon: 'send',
                            id: "3.1",
                            target: '/crm/screen1',
                            text: 'Crm 1'
                        },
                        {
                            icon: 'send',
                            id: "3.2",
                            target: '/crm/screen2',
                            text: 'Crm 2'
                        }
                    ],
                    text: 'CRM',
                },
                {
                    divideBefore: true,
                    icon: 'send',
                    id: "4",
                    subNodes: [
                        {
                            icon: 'send',
                            id: "4.1",
                            target: '/billing/screen1',
                            text: 'Billing 1'
                        },
                        {
                            icon: 'send',
                            id: "4.2",
                            target: '/billing/screen2',
                            text: 'Billing 2'
                        },
                        {
                            icon: 'send',
                            id: "4.3",
                            subNodes: [
                                {
                                    icon: 'send',
                                    id: "4.3.1",
                                    target: '/billing/subscreen1',
                                    text: 'Billing Alt 1'
                                },
                                {
                                    icon: 'send',
                                    id: "4.3.2",
                                    target: '/billing/subscreen2',
                                    text: 'Billing Alt 2'
                                },
                                {
                                    icon: 'send',
                                    id: "4.3.3",
                                    target: '/billing/subscreen3',
                                    text: 'Billing Alt 3'
                                },
                                {
                                    icon: 'send',
                                    id: "4.3.4",
                                    target: '/billing/subscreen4',
                                    text: 'Billing Alt 4'
                                }
                            ],
                            text: 'Billing Alt Ekranlar',
                        }
                    ],
                    text: 'Billing',
                }
            ];
            setTimeout(() => resolve(tree), 1200);
        });
    }
};
MockAuthService = __decorate([
    react_di_1.Injectable,
    __param(0, react_di_1.Inject("IUserContext")),
    __metadata("design:paramtypes", [Object])
], MockAuthService);
exports.default = MockAuthService;
