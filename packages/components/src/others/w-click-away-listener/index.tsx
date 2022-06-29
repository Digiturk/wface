import * as React from 'react';
import ClickAwayListener, { ClickAwayListenerProps } from '@mui/material/ClickAwayListener';

export interface WClickAwayListenerProps extends ClickAwayListenerProps {
}


export const WClickAwayListener: React.FC<WClickAwayListenerProps> = React.forwardRef((props) => {
  return (
    <ClickAwayListener  {...props} />
  );
});


