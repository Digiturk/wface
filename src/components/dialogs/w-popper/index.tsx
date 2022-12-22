import * as React from 'react';
import Popper, { PopperProps } from '@mui/material/Popper';

export interface WPopperProps extends PopperProps {
}

export const  WPopper: React.FC<WPopperProps> = React.forwardRef((props) => {
  return (
    <Popper  {...props} />
  );
});


