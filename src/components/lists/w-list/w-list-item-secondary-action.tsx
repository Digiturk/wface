import * as React from 'react';
import { ListItemSecondaryAction } from '@mui/material';
import { ListItemSecondaryActionProps } from '@mui/material/ListItemSecondaryAction';

export interface WListItemSecondaryActionProps extends ListItemSecondaryActionProps { }

export const WListItemSecondaryAction: React.FC<WListItemSecondaryActionProps> = React.forwardRef((props) => {
  return (
    <ListItemSecondaryAction {...props}/>
  );
});

