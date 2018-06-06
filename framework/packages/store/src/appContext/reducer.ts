import { combineReducers, ReducersMapObject } from 'redux';
import { ActionType, getType } from 'typesafe-actions';
import AppContext from './models'

// export type UserAction = ActionType<typeof Actions>;
 

export const initialState = {
} as AppContext;

const appContext = (state: AppContext = initialState, action: any): AppContext => {
	// switch(action.type) {
	// 	case getType(Actions.login):
    //         return { ...state, ...action.payload, isLoggedIn: true };
    //     case getType(Actions.logout): 
    //         return { ...state, ...initialState };       
	// }

	return state;
}

export default appContext;