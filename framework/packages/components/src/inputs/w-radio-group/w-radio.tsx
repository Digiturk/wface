import * as React from 'react'
import { Radio } from '@material-ui/core'
import { RadioProps } from '@material-ui/core/Radio'

export interface WRadioProps extends RadioProps { }

export class WRadio extends React.Component<WRadioProps, {}> {
  public render() {
    return <Radio {...this.props} />
  }
}