import * as React from 'react';
import { CardActions } from '@mui/material'
import { CardActionsProps } from '@mui/material/CardActions';

export interface WCardActionsProps extends CardActionsProps {
  align?: 'left' | 'right'
}

export const  WCardActions: React.FC<WCardActionsProps> = React.forwardRef((props, ref) => {
  return (
    <CardActions {...props} style={{justifyContent: props.align === "left" ? "flex-start" : "flex-end"}} ref={ref}/>
  );
});
