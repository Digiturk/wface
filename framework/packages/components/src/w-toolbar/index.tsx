import * as React from 'react';
import { Toolbar } from '@material-ui/core';
import { ToolbarProps } from '@material-ui/core/Toolbar';

export interface WToolbarProps extends ToolbarProps {}

export class WToolbar extends React.Component<WToolbarProps, {}> {
    public render() {
        return <Toolbar {...this.props} />;
    }
}
