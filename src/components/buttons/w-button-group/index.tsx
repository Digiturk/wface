import * as React from 'react';
import ButtonGroup, { ButtonGroupProps } from '@mui/material/ButtonGroup';

export interface WButtonGroupProps extends ButtonGroupProps { 
}

export const WButtonGroup: React.FC<WButtonGroupProps> = React.forwardRef((props) => {
  return (
    <ButtonGroup  {...props} />
  );
});



