import * as React from 'react';
import { Drawer } from '@mui/material';
import { DrawerProps } from '@mui/material/Drawer';

export interface WDrawerProps extends DrawerProps { }


export const   WDrawer  : React.FC<WDrawerProps> = React.forwardRef((props, ref) => {
  return (
    <Drawer {...props} ref={ref}/>
  );
});
