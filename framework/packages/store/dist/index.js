"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reducer_1 = require("./appContext/reducer");
const reducer_2 = require("./screenContext/reducer");
const reducer_3 = require("./userContext/reducer");
const redux_1 = require("redux");
const rootReducer = redux_1.combineReducers({
    userContext: reducer_3.default,
    appContext: reducer_1.default,
    screenContext: reducer_2.default
});
let devtools = window['devToolsExtension'] ? window['devToolsExtension']() : (f) => f;
const store = redux_1.createStore(rootReducer, devtools);
exports.default = store;
// export { default as AppContextActions } from "./appcontext/actions"
var actions_1 = require("./screenContext/actions");
exports.ScreenContextActions = actions_1.default;
var actions_2 = require("./userContext/actions");
exports.UserContextActions = actions_2.default;
