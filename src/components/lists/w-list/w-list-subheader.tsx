import * as React from 'react';
import { ListSubheader } from '@mui/material';
import { ListSubheaderProps } from '@mui/material/ListSubheader';

export interface WListSubheaderProps extends ListSubheaderProps { }


export const WListSubheader : React.FC<WListSubheaderProps> = React.forwardRef((props) => {
  return (
    <ListSubheader {...props} />
  );
});

