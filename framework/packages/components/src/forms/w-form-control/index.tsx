import * as React from 'react'
import { FormControl } from '@material-ui/core'
import { FormControlProps } from '@material-ui/core/FormControl'

export interface WFormControlProps extends FormControlProps { }

export class WFormControl extends React.Component<WFormControlProps, {}> {
  public render() {
    return <FormControl {...this.props} />
  }
}