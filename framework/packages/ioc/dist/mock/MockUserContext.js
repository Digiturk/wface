"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_di_1 = require("react.di");
let MockUserContext = class MockUserContext {
    constructor() {
        this.isLoggedIn = true; // default false olmalı
        this.username = 'dtmebaran';
        this.displayName = 'mehmet baran';
    }
    setUserInfo(username, displayName) {
        this.isLoggedIn = true;
        this.username = username;
        this.displayName = displayName;
    }
};
MockUserContext = __decorate([
    react_di_1.Injectable
], MockUserContext);
exports.default = MockUserContext;
