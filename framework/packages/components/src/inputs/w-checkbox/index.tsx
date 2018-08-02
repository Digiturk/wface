import * as React from 'react'
import { WFormControlLabel } from '../../forms/w-form-control-label'
import { Checkbox } from '@material-ui/core'
import { CheckboxProps } from '@material-ui/core/Checkbox'

export interface WCheckboxProps extends CheckboxProps {
  label: string
}

export class WCheckbox extends React.Component<WCheckboxProps, {}> {
  public render() {
    return <WFormControlLabel control={<Checkbox {...this.props} />} {...this.props} />
  }
}