import userContext, { UserAction } from './user/reducer';
import { UserContext } from '@wface/ioc';
import { combineReducers, createStore } from 'redux';

interface All {
    userContext: UserContext
}

const rootReducer = combineReducers<All, any>({
    userContext
})

let devtools: any = window['devToolsExtension'] ? window['devToolsExtension']() : (f:any)=>f;
const store = createStore<All, any, any, any>(rootReducer, devtools);

export default store;
