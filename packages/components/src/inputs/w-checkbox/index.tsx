import * as React from 'react'
import { Checkbox, FormControlLabel } from '@mui/material'
import { CheckboxProps } from '@mui/material/Checkbox'
import { BaseComponentProps } from '../../base/base-component-props';

export type WCheckboxProps = BaseComponentProps & CheckboxProps & { 
  label?: string
}

export class WCheckbox extends React.Component<WCheckboxProps, {}> {
  public render() {
    if(this.props.label) {
      return <FormControlLabel label={this.props.label} control={<Checkbox {...this.props} />}/>
    }
    else {
      return <Checkbox {...this.props} />
    }    
  }
}