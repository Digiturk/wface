import * as React from 'react'
import { Radio, FormControlLabel } from '@material-ui/core'
import { RadioProps } from '@material-ui/core/Radio'

export interface WRadioProps extends RadioProps {
  label: string
}

export class WRadio extends React.Component<WRadioProps, {}> {
  public render() {
    return <FormControlLabel control={<Radio {...this.props} />} {...this.props} />
  }
}