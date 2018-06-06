"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// export type UserAction = ActionType<typeof Actions>;
exports.initialState = {};
const appContext = (state = exports.initialState, action) => {
    // switch(action.type) {
    // 	case getType(Actions.login):
    //         return { ...state, ...action.payload, isLoggedIn: true };
    //     case getType(Actions.logout): 
    //         return { ...state, ...initialState };       
    // }
    return state;
};
exports.default = appContext;
