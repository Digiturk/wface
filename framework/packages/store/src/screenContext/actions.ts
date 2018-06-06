import { createStandardAction } from 'typesafe-actions';
import { IMenuTreeItem } from '@wface/ioc';

const INIT = 'screenContext/INIT';
const SET_CURRENT = 'screenContext/SET_CURRENT';
const DESTRUCT = 'screenContext/DESTRUCT'
const SAVE_STATE = 'screenContext/SAVE_STATE'
const SAVE_ANY = 'screenContext/SAVE_ANY'

const init = createStandardAction(INIT)<IMenuTreeItem>();
const setCurrent = createStandardAction(SET_CURRENT)<string>();
const destruct = createStandardAction(DESTRUCT)<string>();
const saveState = createStandardAction(SAVE_STATE)<{pageId: string, state: any}>();
const saveAny = createStandardAction(SAVE_ANY)<{key: string, value: any}>();
const Actions = { init, setCurrent, destruct, saveState, saveAny};
export default Actions;