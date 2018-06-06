import { ActionType } from 'typesafe-actions';
import UserContext from './models';
import Actions from './actions';
export declare type UserAction = ActionType<typeof Actions>;
export declare const mockState: UserContext;
export declare const initialState: UserContext;
declare const userContext: (state: UserContext, action: {
    type: "userContext/LOGIN";
    payload: UserContext;
} | {
    type: "userContext/LOGOUT";
}) => UserContext;
export default userContext;
