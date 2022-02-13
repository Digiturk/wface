import { createAction } from 'typesafe-actions';
import { IMenuTreeItem, IConfiguration } from '@wface/ioc';

const SET_VALUE = 'appContext/SET_VALUE';
const SET_CONFIG = 'appContext/SET_CONFIG';
const SET_MENU_TREE = 'appContext/SET_MENU_TREE';
const OPEN_SCREEN = 'appContext/OPEN_SCREEN';
const CLOSE_SCREEN = 'appContext/CLOSE_SCREEN';
const SAVE_SCREEN_STATE = 'appContext/SAVE_SCREEN_STATE';
const SAVE_SCREEN_ANY = 'appContext/SAVE_SCREEN_ANY';
const CHANGE_SCREEN_MODE = 'appContext/CHANGE_SCREEN_MODE';
const SET_CONFIRM_ON_CLOSE = 'appContext/SET_CONFIRM_ON_CLOSE';
const SET_QUERY_PARAMS = 'appContext/SET_QUERY_PARAMS';
const CLEAR = 'appContext/CLEAR';

const setValue = createAction(SET_VALUE)<{key: string, value: any}>();
const setConfig = createAction(SET_CONFIG)<IConfiguration>();
const setMenuTree = createAction(SET_MENU_TREE)<IMenuTreeItem[]>();
const openScreen = createAction(OPEN_SCREEN)<{menuTreeItem: IMenuTreeItem, initialValues?: any}>();
const closeScreen = createAction(CLOSE_SCREEN)<IMenuTreeItem>();
const saveScreenState = createAction(SAVE_SCREEN_STATE)<{screenId: string, state: any}>();
const saveScreenAny = createAction(SAVE_SCREEN_ANY)<{key: string, value: any}>();
const changeScreenMode = createAction(CHANGE_SCREEN_MODE)<{screenId: string, mode: 'normal' | 'loading',}>();
const setConfirmOnClose = createAction(SET_CONFIRM_ON_CLOSE)<{screenId: string, confirmOnClose: boolean, confirmOnCloseMessage: string}>();
const setQueryParams = createAction(SET_QUERY_PARAMS)<{ [key: string]: any }>();
const clear = createAction(CLEAR)();
const Actions = { 
  setValue,
  setConfig,
  setMenuTree, 
  openScreen, 
  closeScreen, 
  saveScreenState, 
  saveScreenAny,
  changeScreenMode,
  setConfirmOnClose,
  setQueryParams,
  clear
};
export default Actions;