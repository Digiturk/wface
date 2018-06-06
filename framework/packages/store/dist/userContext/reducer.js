"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typesafe_actions_1 = require("typesafe-actions");
const actions_1 = require("./actions");
exports.mockState = {
    isLoggedIn: true,
    username: 'MockUsername',
    displayName: 'Mock DisplayName'
};
exports.initialState = {
    isLoggedIn: false,
    username: '',
    displayName: ''
};
const userContext = (state = exports.initialState, action) => {
    switch (action.type) {
        case typesafe_actions_1.getType(actions_1.default.login):
            return Object.assign({}, state, action.payload, { isLoggedIn: true });
        case typesafe_actions_1.getType(actions_1.default.logout):
            return Object.assign({}, state, exports.initialState);
    }
    return state;
};
exports.default = userContext;
