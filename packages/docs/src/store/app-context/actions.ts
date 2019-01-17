import { createStandardAction } from 'typesafe-actions';

const CHANGE_LANG = 'appContext/CHANGE_LANG';

const changeLang = createStandardAction(CHANGE_LANG)<"en" | "tr">();
const Actions = { 
  changeLang,
};
export default Actions;