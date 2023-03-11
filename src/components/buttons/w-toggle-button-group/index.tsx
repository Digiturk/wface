import * as React from 'react';
import ToggleButtonGroup, { ToggleButtonGroupProps } from '@mui/material/ToggleButtonGroup';

export interface WToggleButtonGroupProps extends ToggleButtonGroupProps {
}
export const WToggleButtonGroup : React.FC<WToggleButtonGroupProps> = React.forwardRef((props, ref) => {
  return (
    <ToggleButtonGroup  {...props} ref={ref} />
  );
});

