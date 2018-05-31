/// <reference types="react" />
import * as React from 'react';
import { WStore, IMenuTreeItem } from '@wface/ioc';
export interface TestScreenProps extends WStore {
    pageInfo: IMenuTreeItem;
}
export declare class TestScreen extends React.Component<TestScreenProps, {}> {
    render(): JSX.Element;
}
