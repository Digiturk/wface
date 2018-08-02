import * as React from 'react'
import { LinearProgress } from '@material-ui/core';
import { LinearProgressProps } from '@material-ui/core/LinearProgress';

export interface WLinearProgressProps extends LinearProgressProps { }

export class WLinearProgress extends React.Component<WLinearProgressProps, {}> {
  public render() {
    return <LinearProgress {...this.props} />
  }
}