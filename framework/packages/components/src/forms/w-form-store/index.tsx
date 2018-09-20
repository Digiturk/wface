import { createStore, combineReducers } from 'redux';

// Data tiplerimizi tanımlayalım
export interface WFormStore {

}

export const createFormStore = (initialState: WFormStore) => {
  // store ve dispatch tanımlamalarımızı yapalım
  const formStoreDef = (state: WFormStore = initialState, action: any): WFormStore => {
    return state;
  }

  // Reduceri uretelim
  const reducer = combineReducers<WFormStore>(formStoreDef);

  // formStore uretip export edelim
  let devtools: any = window['devToolsExtension'] ? window['devToolsExtension']() : (f: any) => f;
  return createStore<WFormStore, any, any, any>(reducer, devtools);
}

