import appContext from './appContext/reducer';
import AppContext from './appContext/models';
import userContext from './userContext/reducer';
import UserContext from './userContext/models';
import { combineReducers, createStore } from 'redux';


export interface WStore {
  appContext: AppContext,
  userContext: UserContext,
}

const rootReducer = combineReducers<WStore>({
  userContext,
  appContext
})

let devtools: any = window['devToolsExtension'] ? window['devToolsExtension']() : (f: any) => f;
const store = createStore<WStore, any, any, any>(rootReducer, devtools);

export default store;
export { default as AppContextActions } from "./appcontext/actions"
export { default as UserContextActions } from "./userContext/actions"

