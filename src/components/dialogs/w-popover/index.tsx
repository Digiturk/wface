import * as React from 'react';
import Popover, { PopoverProps } from '@mui/material/Popover';

export interface WPopoverProps extends PopoverProps {
}

export const  WPopover: React.FC<WPopoverProps> = React.forwardRef((props, ref) => {
  return (
    <Popover  {...props} ref={ref} />
  );
});

