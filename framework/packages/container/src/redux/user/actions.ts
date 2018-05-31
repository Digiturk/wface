import { createStandardAction } from 'typesafe-actions';
import { UserContext } from '@wface/ioc';
import userContext from './reducer';

const LOGIN = 'user/LOGIN';
const LOGOUT = 'user/LOGOUT';

const login = createStandardAction(LOGIN)<UserContext>();
const logout = createStandardAction(LOGOUT)<void>();    
const Actions = { login, logout };
export default Actions;