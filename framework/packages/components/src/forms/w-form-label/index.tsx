import * as React from 'react'
import { FormLabel } from '@material-ui/core'
import { FormLabelProps } from '@material-ui/core/FormLabel'

export interface WFormLabelProps extends FormLabelProps { }

export class WFormLabel extends React.Component<WFormLabelProps, {}> {
  public render() {
    return <FormLabel {...this.props} />
  }
}