import * as React from 'react'
import Switch, { SwitchProps } from '@mui/material/Switch'
import { BaseComponentProps } from '../../base/base-component-props';

export type WSwitchProps = BaseComponentProps & SwitchProps & { 
}

export class WSwitch extends React.Component<WSwitchProps, {}> {
  public render() {
    return <Switch {...this.props} />
  }
}