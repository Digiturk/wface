import { createStandardAction } from 'typesafe-actions';
import { LoginInfo } from './models';

const LOGIN = 'user/LOGIN';
const LOGOUT = 'user/LOGOUT';

export const login = createStandardAction(LOGIN).map(
    (payload: {username: string, password: string}) => ({
        payload: {
            username: payload.username,
            password: payload.password
        } as LoginInfo
    })
)