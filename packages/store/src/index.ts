import appContext from './app-context/reducer';
import AppContext from './app-context/models';
import userContext from './user-context/reducer';
import UserContext from './user-context/models';
import { combineReducers, createStore } from 'redux';


export interface WStore {
  appContext: AppContext,
  userContext: UserContext,
}

const rootReducer = combineReducers<WStore>({
  userContext,
  appContext
})

// let devtools: any = window['devToolsExtension'] ? window['devToolsExtension']() : (f: any) => f;
let devtools: any = window['__REDUX_DEVTOOLS_EXTENSION__'] ? window['__REDUX_DEVTOOLS_EXTENSION__']() : (f: any) => f;

const store = createStore<WStore, any, any, any>(rootReducer, devtools);

export default store;
export { default as AppContextActions } from "./app-context/actions"
export { default as UserContextActions } from "./user-context/actions"

