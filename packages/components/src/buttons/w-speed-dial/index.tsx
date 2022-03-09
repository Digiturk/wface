import * as React from 'react';
import SpeedDial, { SpeedDialProps } from '@mui/material/SpeedDial';
import { BaseComponentProps } from '../../base/base-component-props';

export type WSpeedDialProps = BaseComponentProps & SpeedDialProps & {  
}

export class WSpeedDial extends React.Component<WSpeedDialProps, {}> {
  public render() {
    return <SpeedDial {...this.props}/>
  }
}

export * from './w-speed-dial-action';
export * from './w-speed-dial-icon';