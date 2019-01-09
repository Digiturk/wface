import appContext from './app-context/reducer';
import AppContext from './app-context/models';
import userContext from './user-context/reducer';
import UserContext from './user-context/models';
import { combineReducers, createStore } from 'redux';
import { loadState, saveState } from './localstorage';
import IOC, { IConfiguration } from '@wface/ioc';


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

const configuration = { useLocalStorage: true} as any //IOC.get<IConfiguration>("AppContext");

const getStore = (useLocalStorage: boolean) => {
  const store = createStore<WStore, any, any, any>(rootReducer, useLocalStorage && loadState(), devtools);
  if(useLocalStorage) {
    store.subscribe(() => {
      saveState(store.getState());
    })
  }

  return store
}

export default getStore;
export { default as AppContextActions } from "./app-context/actions"
export { default as UserContextActions } from "./user-context/actions"

