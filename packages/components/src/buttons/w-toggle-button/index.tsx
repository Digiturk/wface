import * as React from 'react';
import ToggleButton, { ToggleButtonProps } from '@mui/material/ToggleButton';
import { BaseComponentProps } from '../../base/base-component-props';

export type WToggleButtonProps = BaseComponentProps & ToggleButtonProps & {
}

export const WToggleButton: React.FC<WToggleButtonProps> = React.forwardRef((props) => {
  return (
    <ToggleButton  {...props} />
  );
});

