import { MenuTreeUtil } from '../../';
import { ActionType, getType } from 'typesafe-actions';
import Actions from './actions';
import AppContext, { ScreenData } from './models';

export type AppAction = ActionType<typeof Actions>;

export const initialState = {
  configuration: {} as any,
  menuTree: [],
  openedScreens: [],
  currentScreen: undefined,
  cache: {},
  queryParams: {},
  rightDrawerOpen: false
} as AppContext;

const appContext = (state: AppContext = initialState, action: AppAction): AppContext => {
  switch (action.type) {
    case getType(Actions.setValue): {
      return { ...state, cache: { ...state.cache, [action.payload.key]: action.payload.value } }
    }
    case getType(Actions.setConfig): {
      return { ...state, configuration: action.payload };
    }
    case getType(Actions.setMenuTree): {
      const openedScreens = [...state.openedScreens];
      let currentScreen = state.currentScreen;
      if (openedScreens.length == 0) {
        MenuTreeUtil.menuTreeForEach(action.payload, item => {
          if (item.isDefaultScreen) {
            openedScreens.push({
              menuTreeItem: item,
              values: {},
              state: undefined,
              initialValues: item.initialValues,
              mode: 'normal'
            } as ScreenData);
          }
          return false;
        });

        if (openedScreens.length > 0) {
          currentScreen = openedScreens[0];
        }
      }

      return { ...state, menuTree: action.payload, openedScreens, currentScreen };
    }
    case getType(Actions.openScreen): {
      const openedScreens = [...state.openedScreens];
      let screenData = openedScreens.find(a => a.menuTreeItem.id == action.payload.menuTreeItem.id);
      if (screenData) {
        screenData.initialValues = Object.assign({}, action.payload.menuTreeItem.initialValues, action.payload.initialValues);
      }
      else {
        screenData = {
          menuTreeItem: action.payload.menuTreeItem,
          values: {},
          state: undefined,
          initialValues: Object.assign({}, action.payload.menuTreeItem.initialValues, action.payload.initialValues),
          mode: 'normal',
          confirmOnClose: false,
          confirmOnCloseMessage: ''
        } as ScreenData;
        openedScreens.push(screenData);
      }

      return { ...state, openedScreens, currentScreen: screenData };
    }
    case getType(Actions.closeScreen): {
      let openedScreens = [...state.openedScreens];
      const index = openedScreens.findIndex((item: any) => item.menuTreeItem.id == action.payload.id);
      if (index > -1) {
        openedScreens.splice(index, 1);
      }

      let currentScreen = { ...state.currentScreen } as AppContext['currentScreen'];
      if (currentScreen?.menuTreeItem?.id == action.payload.id) {
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
      const currentScreen = { ...state.currentScreen } as AppContext['currentScreen'];
      if (currentScreen) {
        currentScreen.values[action.payload.key] = action.payload.value;
      }

      return { ...state, currentScreen };
    }
    case getType(Actions.saveScreenState): {
      const openedScreens = [...state.openedScreens];
      const screen = openedScreens.find(a => a.menuTreeItem.id === action.payload.screenId);
      if (screen) {
        screen.state = action.payload.state;
      }

      return { ...state, openedScreens };
    }
    case getType(Actions.changeScreenMode): {
      const openedScreens = [...state.openedScreens];
      const screen = openedScreens.find(a => a.menuTreeItem.id === action.payload.screenId);
      if (screen) {
        screen.mode = action.payload.mode;
      }

      return { ...state, openedScreens };
    }
    case getType(Actions.setConfirmOnClose): {
      const openedScreens = [...state.openedScreens];
      const screen = openedScreens.find(a => a.menuTreeItem.id === action.payload.screenId);
      if (screen) {
        screen.confirmOnClose = action.payload.confirmOnClose;
        screen.confirmOnCloseMessage = action.payload.confirmOnCloseMessage;
      }

      return { ...state, openedScreens };
    }
    case getType(Actions.clear): {
      return { ...initialState, configuration: state.configuration }
    }
    case getType(Actions.setQueryParams): {
      return { ...state, queryParams: action.payload };
    }
    case getType(Actions.toggleRightDrawer): {
      let rightDrawerOpen = !state.rightDrawerOpen;
      if (action.payload !== undefined) {
        rightDrawerOpen = !!action.payload;
      }

      return { ...state, rightDrawerOpen };
    }
  }

  return state;
}

export default appContext;