import { combineReducers, ReducersMapObject } from 'redux';
import { ActionType, getType } from 'typesafe-actions';
import { IMenuTreeItem } from '@wface/ioc'
import AllScreenContext, { ScreenContext } from './models';
import Actions from './actions';

export type ScreenContextAction = ActionType<typeof Actions>;

const screenContext = (state: AllScreenContext = {} , action: ScreenContextAction): AllScreenContext => {
    switch(action.type) {
        case getType(Actions.init):{      
            let result = Object.assign({}, state);
            result[action.payload.id] = {
                pageInfo: action.payload,                
                state: undefined, 
                values: {}
            };
            return result;
        }
        case getType(Actions.setCurrent):{      
            let result = Object.assign({}, state);
            result.current = result[action.payload];
            return result;
        }
        case getType(Actions.destruct):{
            let result = Object.assign({}, state);
            delete result[action.payload];
            if(result.current.pageInfo.id == action.payload) {
                result.current = null;
            }
            return result;
        }
        case getType(Actions.saveState):{
            if(state[action.payload.pageId]) {
                let result = Object.assign({}, state);
                result[action.payload.pageId].state = action.payload.state;
                return result;
            }
        }
        case getType(Actions.saveAny):
        {
            if(state.current) {
                const screenId = state.current.pageInfo.id;
                if(state[state.current.pageInfo.id]) {
                    let result = Object.assign({}, state);
                    result[screenId].values[action.payload["key"]] = action.payload["value"];
                    result.current = result[screenId];                
                    return result;
                }
            }
        }
    }
	return state;
}

export default screenContext;