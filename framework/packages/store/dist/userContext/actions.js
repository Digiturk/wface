"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typesafe_actions_1 = require("typesafe-actions");
const LOGIN = 'userContext/LOGIN';
const LOGOUT = 'userContext/LOGOUT';
const login = typesafe_actions_1.createStandardAction(LOGIN)();
const logout = typesafe_actions_1.createStandardAction(LOGOUT)();
const Actions = { login, logout };
exports.default = Actions;
