import * as React from 'react';
import CardActionArea, { CardActionAreaProps } from '@mui/material/CardActionArea';

export interface WCardActionAreaProps extends CardActionAreaProps { }


export const  WCardActionArea: React.FC<WCardActionAreaProps> = React.forwardRef((props) => {
  return (
    <CardActionArea {...props}/>
  );
});

