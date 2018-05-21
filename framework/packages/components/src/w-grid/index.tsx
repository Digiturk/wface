import * as React from 'react';
import { Grid } from '@material-ui/core';
import { GridProps } from '@material-ui/core/Grid';

export interface WGridProps extends GridProps {}

export class WGrid extends React.Component<WGridProps, any> {
    public render() {
        return <Grid {...this.props} />
    }
}