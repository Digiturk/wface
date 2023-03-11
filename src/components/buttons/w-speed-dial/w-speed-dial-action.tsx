import * as React from 'react';
import SpeedDialAction, { SpeedDialActionProps } from '@mui/material/SpeedDialAction';

export interface WSpeedDialActionProps extends SpeedDialActionProps {
}

export const WSpeedDialAction: React.FC<WSpeedDialActionProps> = React.forwardRef((props, ref) => {
  return (
    <SpeedDialAction  {...props} ref={ref} />
  );
});


