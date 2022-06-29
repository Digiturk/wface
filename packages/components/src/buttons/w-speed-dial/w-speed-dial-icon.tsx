import * as React from 'react';
import SpeedDialIcon, { SpeedDialIconProps } from '@mui/material/SpeedDialIcon';

export interface WSpeedDialIconProps extends SpeedDialIconProps {
}

export const WSpeedDialIcon : React.FC<WSpeedDialIconProps> = React.forwardRef((props) => {
  return (
    <SpeedDialIcon   {...props} />
  );
});


