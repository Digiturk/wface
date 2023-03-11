import * as React from 'react';
import { Chip } from '@mui/material';
import { ChipProps } from '@mui/material/Chip';
import { BaseComponentProps } from '../../base/base-component-props';

export type WChipProps = BaseComponentProps & ChipProps & {
}
export const WChip: React.FC<WChipProps> = React.forwardRef((props, ref) => {
  return (
    <Chip {...props} ref={ref} />
  );
});

