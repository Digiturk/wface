import { createStandardAction } from 'typesafe-actions';
import { IMenuTreeItem, IConfiguration } from '@wface/ioc';

const SET_VALUE = 'appContext/SET_VALUE';
const SET_CONFIG = 'appContext/SET_CONFIG';
const SET_MENU_TREE = 'appContext/SET_MENU_TREE';
const OPEN_SCREEN = 'appContext/OPEN_SCREEN';
const CLOSE_SCREEN = 'appContext/CLOSE_SCREEN';
const SAVE_SCREEN_STATE = 'appContext/SAVE_SCREEN_STATE'
const SAVE_SCREEN_ANY = 'appContext/SAVE_SCREEN_ANY'

const setValue = createStandardAction(SET_VALUE)<{key: string, value: any}>();
const setConfig = createStandardAction(SET_CONFIG)<IConfiguration>();
const setMenuTree = createStandardAction(SET_MENU_TREE)<IMenuTreeItem[]>();
const openScreen = createStandardAction(OPEN_SCREEN)<{menuTreeItem: IMenuTreeItem, initialValues?: any}>();
const closeScreen = createStandardAction(CLOSE_SCREEN)<IMenuTreeItem>();
const saveScreenState = createStandardAction(SAVE_SCREEN_STATE)<{screenId: string, state: any}>();
const saveScreenAny = createStandardAction(SAVE_SCREEN_ANY)<{key: string, value: any}>();
const Actions = { 
  setValue,
  setConfig,
  setMenuTree, 
  openScreen, 
  closeScreen, 
  saveScreenState, 
  saveScreenAny
};
export default Actions;