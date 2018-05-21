import * as React from 'react';
import { Tabs } from '@material-ui/core';
import { TabsProps } from '@material-ui/core/tabs';

export interface WTabsProps extends TabsProps {}

export class WTabs extends React.Component<WTabsProps, {}> {
    public render() {
        return <Tabs {...this.props} />
    }
}