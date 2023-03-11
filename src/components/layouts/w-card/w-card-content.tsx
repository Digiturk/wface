import * as React from 'react';
import { CardContent } from '@mui/material'
import { CardContentProps } from '@mui/material/CardContent';

export interface WCardContentProps extends CardContentProps { }

export const  WCardContent : React.FC<WCardContentProps> = React.forwardRef((props, ref) => {
  return (
    <CardContent {...props} ref={ref}/>
  );
});


