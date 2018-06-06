import { combineReducers, ReducersMapObject } from 'redux';
import { ActionType, getType } from 'typesafe-actions';
import UserContext from './models'
import Actions from './actions';

export type UserAction = ActionType<typeof Actions>;
 
export const mockState = {
    isLoggedIn: true,
    username: 'MockUsername',
    displayName: 'Mock DisplayName'
} as UserContext;

export const initialState = {
    isLoggedIn: false,
    username: '',
    displayName: ''
} as UserContext;

const userContext = (state: UserContext = mockState, action: UserAction): UserContext => {
	switch(action.type) {
		case getType(Actions.login):
            return { ...state, ...action.payload, isLoggedIn: true };
        case getType(Actions.logout): 
            return { ...state, ...initialState };       
	}

	return state;
}

export default userContext;