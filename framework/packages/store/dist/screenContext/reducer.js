"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typesafe_actions_1 = require("typesafe-actions");
const actions_1 = require("./actions");
const screenContext = (state = {}, action) => {
    switch (action.type) {
        case typesafe_actions_1.getType(actions_1.default.init): {
            let result = Object.assign({}, state);
            result[action.payload.id] = {
                pageInfo: action.payload,
                state: undefined,
                values: {}
            };
            return result;
        }
        case typesafe_actions_1.getType(actions_1.default.setCurrent): {
            let result = Object.assign({}, state);
            result.current = result[action.payload];
            return result;
        }
        case typesafe_actions_1.getType(actions_1.default.destruct): {
            let result = Object.assign({}, state);
            delete result[action.payload];
            if (result.current.pageInfo.id == action.payload) {
                result.current = null;
            }
            return result;
        }
        case typesafe_actions_1.getType(actions_1.default.saveState): {
            if (state[action.payload.pageId]) {
                let result = Object.assign({}, state);
                result[action.payload.pageId].state = action.payload.state;
                return result;
            }
        }
        case typesafe_actions_1.getType(actions_1.default.saveAny):
            {
                if (state.current) {
                    const screenId = state.current.pageInfo.id;
                    if (state[state.current.pageInfo.id]) {
                        let result = Object.assign({}, state);
                        result[screenId].values[action.payload["key"]] = action.payload["value"];
                        result.current = result[screenId];
                        return result;
                    }
                }
            }
    }
    return state;
};
exports.default = screenContext;
