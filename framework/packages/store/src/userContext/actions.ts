import { createStandardAction } from 'typesafe-actions';
import UserContext from './models';

const LOGIN = 'userContext/LOGIN';
const LOGOUT = 'userContext/LOGOUT';

const login = createStandardAction(LOGIN)<UserContext>();
const logout = createStandardAction(LOGOUT)<void>();    
const Actions = { login, logout };
export default Actions;