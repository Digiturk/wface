import * as React from 'react';
import { Paper } from '@material-ui/core';
import { PaperProps } from '@material-ui/core/Paper';

export interface WPaperProps extends PaperProps {}

export class WPaper extends React.Component<WPaperProps, {}> {
    public render() {
        return <Paper {...this.props} />;
    }
}
