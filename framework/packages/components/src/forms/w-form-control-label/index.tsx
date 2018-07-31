import * as React from 'react'
import { FormControlLabel } from '@material-ui/core'
import { FormControlLabelProps } from '@material-ui/core/FormControlLabel'

export interface WFormControlLabelProps extends FormControlLabelProps { }

export class WFormControlLabel extends React.Component<WFormControlLabelProps, {}> {
  public render() {
    return <FormControlLabel {...this.props} />
  }
}