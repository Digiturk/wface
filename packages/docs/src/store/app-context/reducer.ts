import { MenuTreeUtil } from '@wface/ioc';
import { ActionType, getType } from 'typesafe-actions';
import Actions from './actions';
import AppContext from './models';

export type AppAction = ActionType<typeof Actions>;

export const initialState = {
  lang: 'en'
} as AppContext;

const appContext = (state: AppContext = initialState, action: AppAction): AppContext => {
  switch (action.type) {
    case getType(Actions.changeLang): {
      return { ...state, lang: action.payload }
    }
  }

  return state;
}

export default appContext;