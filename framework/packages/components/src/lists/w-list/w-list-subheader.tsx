import * as React from 'react';
import { ListSubheader } from '@material-ui/core';
import { ListSubheaderProps } from '@material-ui/core/ListSubheader';

export interface WListSubheaderProps extends ListSubheaderProps {}

export class WListSubheader extends React.Component<WListSubheaderProps, {}> {
    public render() {
        return <ListSubheader {...this.props} />;
    }
}