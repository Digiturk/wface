import { IMenuTreeItem } from '@wface/ioc'

export default interface AllScreenContext {
    current?: ScreenContext,
    [key: string]: ScreenContext
}

export interface ScreenContext {
    screenInfo: IMenuTreeItem
    state: any,
    values: {[key: string]: any}
}