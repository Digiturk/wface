import * as React from 'react';
import { WStore, IMenuTreeItem } from '@wface/ioc';

export interface TestScreenProps extends WStore {
    pageInfo: IMenuTreeItem;
}

export class TestScreen extends React.Component<TestScreenProps, {}> {
    public render() {
        return (
            <div>
                {this.props.pageInfo.text} works 
                <br/>
                {this.props.userContext.displayName}
            </div>
        );
    }
}