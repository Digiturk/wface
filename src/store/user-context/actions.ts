import { createAction } from 'typesafe-actions';
import UserContext from './models';

const LOGIN = 'userContext/LOGIN';
const LOGOUT = 'userContext/LOGOUT';

const login = createAction(LOGIN)<UserContext>();
const logout = createAction(LOGOUT)<void>();    
const Actions = { login, logout };
export default Actions;