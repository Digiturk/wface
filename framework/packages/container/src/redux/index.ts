import userContext, { UserAction } from './user/reducer';
import { WStore } from '@wface/ioc';
import { combineReducers, createStore } from 'redux';


const rootReducer = combineReducers<WStore, any>({
    userContext,
    appContext: undefined
})

let devtools: any = window['devToolsExtension'] ? window['devToolsExtension']() : (f:any)=>f;
const store = createStore<WStore, any, any, any>(rootReducer, devtools);

export default store;

export { default as Actions } from "./user/actions"
