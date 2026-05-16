import * as React from 'react';
import GridLegacy from '@mui/material/GridLegacy';
import { GridLegacyProps } from '@mui/material/GridLegacy';

export interface WGridProps extends GridLegacyProps { }


export const WGrid: React.FC<WGridProps> = React.forwardRef((props, ref) => {
  return (
    <GridLegacy {...props} ref={ref} />
  );
});

