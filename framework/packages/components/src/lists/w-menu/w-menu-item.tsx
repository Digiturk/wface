import * as React from 'react';
import { MenuItem } from '@material-ui/core';
import { MenuItemProps } from '@material-ui/core/MenuItem';

export interface WMenuItemProps extends MenuItemProps {}

export class WMenuItem extends React.Component<WMenuItemProps, {}> {
    public render() {
        return <MenuItem {...this.props}/>
    }
}