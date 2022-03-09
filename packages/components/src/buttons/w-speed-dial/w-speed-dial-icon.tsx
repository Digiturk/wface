import * as React from 'react';
import SpeedDialIcon, { SpeedDialIconProps } from '@mui/material/SpeedDialIcon';

export interface WSpeedDialIconProps extends SpeedDialIconProps {
}

export class WSpeedDialIcon extends React.Component<WSpeedDialIconProps, {}> {
  public render() {
    return <SpeedDialIcon {...this.props}/>
  }
}