import * as React from 'react';
import { Typography } from '@mui/material';
import { TypographyProps } from '@mui/material/Typography';

export interface WTypographyProps extends TypographyProps { }

export const  WTypography: React.FC<WTypographyProps> = React.forwardRef((props, ref) => {
  return (
    <Typography {...props} ref={ref}/>
  );
});