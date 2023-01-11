import * as React from 'react'
import Switch, { SwitchProps } from '@mui/material/Switch'
import { BaseComponentProps } from '../../base/base-component-props';

export type WSwitchProps = BaseComponentProps & SwitchProps & { 
}

export const  WSwitch : React.FC<WSwitchProps> = React.forwardRef((props) => {
  return (
    <Switch {...props} />
  );
});
