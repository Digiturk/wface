import * as React from 'react';
import { Grid } from '@mui/material';
import { GridProps } from '@mui/material/Grid';

export interface WGridProps extends GridProps { }


export const   WGrid   : React.FC<WGridProps> = React.forwardRef((props) => {
  return (
    <Grid {...props}/>
  );
});

