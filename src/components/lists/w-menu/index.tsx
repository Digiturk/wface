import * as React from 'react';
import { Menu } from '@mui/material';
import { MenuProps } from '@mui/material/Menu';
import { BaseComponentProps } from '../../base/base-component-props';

export type WMenuProps = BaseComponentProps & MenuProps & { 
}

export const WMenu : React.FC<WMenuProps> = React.forwardRef((props, ref) => {
  return (
    <Menu {...props} ref={ref}/>
  );
});

export * from './w-menu-item';