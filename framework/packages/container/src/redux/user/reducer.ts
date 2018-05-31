import { combineReducers, ReducersMapObject } from 'redux';
import { ActionType, getType } from 'typesafe-actions';
import { UserContext } from '@wface/ioc'

import Actions from './actions';

export type UserAction = ActionType<typeof Actions>;
 
export const initialState = {
    isLoggedIn: true,
    username: '',
    displayName: ''
} as UserContext;

const userContext = (state: UserContext = initialState, action: UserAction): UserContext => {
	switch(action.type) {
		case getType(Actions.login):
            return { ...state, ...action.payload, isLoggedIn: true };
        case getType(Actions.logout): 
            return { ...state, ...initialState };       
	}

	return state;
}

export default userContext;