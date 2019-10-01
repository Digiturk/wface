import * as React from 'react';
import SpeedDialAction, { SpeedDialActionProps } from '@material-ui/lab/SpeedDialAction';

export interface WSpeedDialActionProps extends SpeedDialActionProps {
}

export class WSpeedDialAction extends React.Component<WSpeedDialActionProps, {}> {
  public render() {
    return <SpeedDialAction {...this.props}/>
  }
}