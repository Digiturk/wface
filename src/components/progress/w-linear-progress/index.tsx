import * as React from 'react'
import { LinearProgress } from '@mui/material';
import { LinearProgressProps } from '@mui/material/LinearProgress';

export interface WLinearProgressProps extends LinearProgressProps { }

export const WLinearProgress : React.FC<WLinearProgressProps> = React.forwardRef((props, ref) => {
  return (
    <LinearProgress {...props} ref={ref}/>
  );
});

