import appContext from './app-context/reducer';
import AppContext from './app-context/models';
import { combineReducers, createStore } from 'redux';
import { loadState, saveState } from './localstorage';
import IOC, { IConfiguration } from '@wface/ioc';


export interface WStore {
  appContext: AppContext
}

const rootReducer = combineReducers<WStore>({
  appContext
})

// let devtools: any = window['devToolsExtension'] ? window['devToolsExtension']() : (f: any) => f;
let devtools: any = window['__REDUX_DEVTOOLS_EXTENSION__'] ? window['__REDUX_DEVTOOLS_EXTENSION__']() : (f: any) => f;
const store = createStore<WStore, any, any, any>(rootReducer, loadState(), devtools);
store.subscribe(() => {
  saveState(store.getState());
})

export default store;
export { default as AppContextActions } from "./app-context/actions"

