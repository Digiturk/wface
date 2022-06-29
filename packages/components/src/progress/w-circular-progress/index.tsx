import * as React from 'react'
import { CircularProgress } from '@mui/material';
import { CircularProgressProps } from '@mui/material/CircularProgress';
import { FC } from 'react';

export interface WCircularProgressProps extends CircularProgressProps { }



export const WCircularProgress : React.FC<WCircularProgressProps> = React.forwardRef((props) => {
  return (
    <CircularProgress   {...props} />
  );
});

