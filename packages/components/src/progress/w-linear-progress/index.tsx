import * as React from 'react'
import { LinearProgress } from '@mui/material';
import { LinearProgressProps } from '@mui/material/LinearProgress';

export interface WLinearProgressProps extends LinearProgressProps { }

export class WLinearProgress extends React.Component<WLinearProgressProps, {}> {
  public render() {
    return <LinearProgress {...this.props} />
  }
}