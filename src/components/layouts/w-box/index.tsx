import * as React from 'react';
import { Box } from '@mui/material';
import { BoxProps } from '@mui/material/Box';

export interface WBoxProps extends BoxProps { }

export const WBox: React.FC<WBoxProps> = React.forwardRef((props, ref) => {
  return (
    <Box {...props} ref={ref} />
  );
});

