import * as React from 'react';
import { ListItemIcon } from '@mui/material';
import { ListItemIconProps } from '@mui/material/ListItemIcon';

export interface WListItemIconProps extends ListItemIconProps { }


export const WListItemIcon: React.FC<WListItemIconProps> = React.forwardRef((props) => {
  return (
    <ListItemIcon {...props} />
  );
});

