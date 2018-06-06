import { ActionType } from 'typesafe-actions';
import { IMenuTreeItem } from '@wface/ioc';
import AllScreenContext from './models';
import Actions from './actions';
export declare type ScreenContextAction = ActionType<typeof Actions>;
declare const screenContext: (state: AllScreenContext, action: {
    type: "screenContext/INIT";
    payload: IMenuTreeItem;
} | {
    type: "screenContext/SET_CURRENT";
    payload: string;
} | {
    type: "screenContext/DESTRUCT";
    payload: string;
} | {
    type: "screenContext/SAVE_STATE";
    payload: {
        pageId: string;
        state: any;
    };
} | {
    type: "screenContext/SAVE_ANY";
    payload: {
        key: string;
        value: any;
    };
}) => AllScreenContext;
export default screenContext;
