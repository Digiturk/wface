import * as React from 'react'
import { Switch } from '@material-ui/core'
import { SwitchProps } from '@material-ui/core/Switch'
import { BaseComponentProps } from '../../base/base-component-props';

export type WSwitchProps = BaseComponentProps & SwitchProps & { 
}

export class WSwitch extends React.Component<WSwitchProps, {}> {
  public render() {
    return <Switch {...this.props} />
  }
}