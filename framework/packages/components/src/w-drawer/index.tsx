import * as React from 'react';
import { Drawer } from '@material-ui/core';
import { DrawerProps } from '@material-ui/core/drawer';

export interface WDrawerProps extends DrawerProps {}

export class WDrawer extends React.Component<WDrawerProps, {}> {
    public render() {
        return <Drawer {...this.props} />
    }
}