import * as React from 'react';
import { Toolbar } from '@mui/material';
import { ToolbarProps } from '@mui/material/Toolbar';
import { BaseComponentProps } from '../../base/base-component-props';

export type WToolBarProps = BaseComponentProps & ToolbarProps & { 
}

export const WToolBar : React.FC<WToolBarProps> = React.forwardRef((props, ref) => {
  return (
    <Toolbar  {...props} ref={ref} />
  );
});

