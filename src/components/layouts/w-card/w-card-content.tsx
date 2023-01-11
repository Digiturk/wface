import * as React from 'react';
import { CardContent } from '@mui/material'
import { CardContentProps } from '@mui/material/CardContent';

export interface WCardContentProps extends CardContentProps { }

export const  WCardContent : React.FC<WCardContentProps> = React.forwardRef((props) => {
  return (
    <CardContent {...props}/>
  );
});


