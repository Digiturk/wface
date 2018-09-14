import * as React from 'react'
import { Checkbox, FormControlLabel } from '@material-ui/core'
import { CheckboxProps } from '@material-ui/core/Checkbox'

export interface WCheckboxProps extends CheckboxProps {
  label?: string
}

export class WCheckbox extends React.Component<WCheckboxProps, {}> {
  public render() {
    if(this.props.label) {
      return <FormControlLabel label={this.props.label} control={<Checkbox {...this.props} />} {...this.props} />
    }
    else {
      return <Checkbox {...this.props} />
    }
    
  }
}