import * as React from 'react';
import AppBar, { AppBarProps } from '@mui/material/AppBar';
import { BaseComponentProps } from '../../base/base-component-props';


export type WAppBarProps = BaseComponentProps & AppBarProps & { 
}
export const WAppBar: React.FC<WAppBarProps> = React.forwardRef((props) => {
  return (
    <AppBar  {...props} />
  );
});

