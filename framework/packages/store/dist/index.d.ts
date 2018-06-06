import AppContext from './appContext/models';
import AllScreenContext from './screenContext/models';
import UserContext from './userContext/models';
export interface WStore {
    appContext: AppContext;
    screenContext: AllScreenContext;
    userContext: UserContext;
}
declare const store: any;
export default store;
export { default as ScreenContextActions } from "./screenContext/actions";
export { default as UserContextActions } from "./userContext/actions";
