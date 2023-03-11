import * as React from 'react';
import { Divider } from '@mui/material';
import { DividerProps } from '@mui/material/Divider';

export interface WDividerProps extends DividerProps { }

export const WDivider : React.FC<WDividerProps> = React.forwardRef((props, ref) => {
  return (
    <Divider {...props} ref={ref}/>
  );
});

