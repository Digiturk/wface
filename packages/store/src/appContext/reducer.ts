import { combineReducers, ReducersMapObject } from 'redux';
import { ActionType, getType } from 'typesafe-actions';
import AppContext, { ScreenData } from './models'
import Actions from './actions';
import { IMenuTreeItem, MenuTreeUtil } from '@wface/ioc';

export type AppAction = ActionType<typeof Actions>;


export const initialState = {
  menuTree: [],
  openedScreens: [],
  currentScreen: null
} as AppContext;

const appContext = (state: AppContext = initialState, action: AppAction): AppContext => {
  switch (action.type) {
    case getType(Actions.setMenuTree): {      
      const openedScreens = [...state.openedScreens];
      let currentScreen = state.currentScreen;
      if(openedScreens.length == 0) {
        MenuTreeUtil.menuTreeForEach(action.payload, item => {       
          if(item.isDefaultScreen) {   
            openedScreens.push({ 
              menuTreeItem: item, 
              values: {}, 
              state: undefined, 
              initialValues: item.initialValues 
            } as ScreenData);
          }
          return false;
        });

        if(openedScreens.length > 0) {
          currentScreen = openedScreens[0];
        }
      }
      
      return { ...state, menuTree: action.payload, openedScreens, currentScreen };
    }
    case getType(Actions.openScreen): {      
      const openedScreens = [...state.openedScreens];
      let screenData = openedScreens.find(a => a.menuTreeItem.id == action.payload.menuTreeItem.id);
      if(screenData) {
        screenData.initialValues = Object.assign({}, action.payload.menuTreeItem.initialValues, action.payload.initialValues);
      }
      else {
        screenData = { 
          menuTreeItem: action.payload.menuTreeItem, 
          values: {}, 
          state: undefined,
          initialValues: Object.assign({}, action.payload.menuTreeItem.initialValues, action.payload.initialValues)
        } as ScreenData;
        openedScreens.push(screenData);
      }

      return { ...state, openedScreens, currentScreen: screenData};
    }
    case getType(Actions.closeScreen): {
      let openedScreens = [...state.openedScreens];
      const index = openedScreens.findIndex(item => item.menuTreeItem.id == action.payload.id);
      if (index > -1) {
        openedScreens.splice(index, 1);        
      }
      
      let currentScreen = {...state.currentScreen};
      if (currentScreen.menuTreeItem.id == action.payload.id) {
        if (openedScreens.length == 0) {
          currentScreen = undefined;
        }
        else if (openedScreens.length - 1 >= index) {
          currentScreen = openedScreens[index];
        }
        else {
          currentScreen = openedScreens[index - 1];
        }
      }

      return { ...state, openedScreens, currentScreen };
    }
    case getType(Actions.saveScreenAny): {
      const currentScreen = { ...state.currentScreen }
      currentScreen.values[action.payload.key] = action.payload.value;

      return { ...state, currentScreen };
    }
    case getType(Actions.saveScreenState): {
      const openedScreens = [...state.openedScreens];
      const screen = openedScreens.find(a => a.menuTreeItem.id === action.payload.screenId);
      if(screen) {
        screen.state = action.payload.state;
      }

      return { ...state, openedScreens };
    }
  }

  return state;
}

export default appContext;