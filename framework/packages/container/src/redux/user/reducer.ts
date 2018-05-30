import { combineReducers, ReducersMapObject } from 'redux';
import { ActionType, getType } from 'typesafe-actions';
import { UserContext } from '@wface/ioc'

import { LoginInfo } from './models';
import * as user from './actions';

export type UserAction = ActionType<typeof user>;
 
export const initialState = {
    isLoggedIn: true,
    username: '',
    displayName: ''
} as UserContext;

const userContext = (state: UserContext = initialState, action: UserAction): UserContext => {
	switch(action.type) {
		case "user/LOGIN":
            return state;            
	}

	return state;
}

export default userContext;