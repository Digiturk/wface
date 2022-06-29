import * as React from 'react';
import { CardHeader } from '@mui/material'
import { CardHeaderProps } from '@mui/material/CardHeader';

export interface WCardHeaderProps extends CardHeaderProps { }


export const  WCardHeader : React.FC<WCardHeaderProps> = React.forwardRef((props) => {
  return (
     <CardHeader {...props} />
  );
});

