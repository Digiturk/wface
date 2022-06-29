import * as React from 'react';
import SpeedDial, { SpeedDialProps } from '@mui/material/SpeedDial';
import { BaseComponentProps } from '../../base/base-component-props';

export type WSpeedDialProps = BaseComponentProps & SpeedDialProps & {  
}

export const  WSpeedDial: React.FC<WSpeedDialProps> = React.forwardRef((props) => {
  return (
    <SpeedDial {...props}/>
  );
});



export * from './w-speed-dial-action';
export * from './w-speed-dial-icon';