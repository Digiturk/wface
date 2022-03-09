import * as React from 'react';
import { Grid } from '@mui/material';
import { GridProps } from '@mui/material/Grid';

export interface WGridProps extends GridProps { }

export class WGrid extends React.Component<WGridProps, any> {
  public render() {
    return <Grid {...this.props} />
  }
}