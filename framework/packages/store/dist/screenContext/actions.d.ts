import { IMenuTreeItem } from '@wface/ioc';
declare const Actions: {
    init: (payload: IMenuTreeItem) => {
        type: "screenContext/INIT";
        payload: IMenuTreeItem;
    };
    setCurrent: (payload: string) => {
        type: "screenContext/SET_CURRENT";
        payload: string;
    };
    destruct: (payload: string) => {
        type: "screenContext/DESTRUCT";
        payload: string;
    };
    saveState: (payload: {
        screenId: string;
        state: any;
    }) => {
        type: "screenContext/SAVE_STATE";
        payload: {
            screenId: string;
            state: any;
        };
    };
    saveAny: (payload: {
        key: string;
        value: any;
    }) => {
        type: "screenContext/SAVE_ANY";
        payload: {
            key: string;
            value: any;
        };
    };
};
export default Actions;
