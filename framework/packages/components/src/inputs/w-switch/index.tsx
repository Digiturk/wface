import * as React from 'react'
import { Switch } from '@material-ui/core'
import { SwitchProps } from '@material-ui/core/Switch'

export interface WSwitchProps extends SwitchProps { }

export class WSwitch extends React.Component<WSwitchProps, {}> {
  public render() {
    return <Switch {...this.props} />
  }
}