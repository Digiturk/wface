import * as React from 'react'
import { RadioGroup } from '@material-ui/core'
import { RadioGroupProps } from '@material-ui/core/RadioGroup'

export interface WRadioGroupProps extends RadioGroupProps { }

export class WRadioGroup extends React.Component<WRadioGroupProps, {}> {
  public render() {
    return <RadioGroup {...this.props} />
  }
}