import * as React from 'react'
import { Checkbox } from '@material-ui/core'
import { CheckboxProps } from '@material-ui/core/Checkbox'

export interface WCheckboxProps extends CheckboxProps { }

export class WCheckbox extends React.Component<WCheckboxProps, {}> {
  public render() {
    return <Checkbox {...this.props} />
  }
}