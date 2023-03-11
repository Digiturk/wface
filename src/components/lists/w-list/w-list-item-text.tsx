import * as React from 'react';
import { ListItemText } from '@mui/material';
import { ListItemTextProps } from '@mui/material/ListItemText';

export interface WListItemTextProps extends ListItemTextProps { }

export const WListItemText: React.FC<WListItemTextProps> = React.forwardRef((props, ref) => {
  return (
    <ListItemText {...props} ref={ref}/>
  );
});


