import * as React from 'react'
import { FormHelperText } from '@material-ui/core'
import { FormHelperTextProps } from '@material-ui/core/FormHelperText'

export interface WFormHelperTextProps extends FormHelperTextProps { }

export class WFormHelperText extends React.Component<WFormHelperTextProps, {}> {
  public render() {
    return <FormHelperText {...this.props} />
  }
}