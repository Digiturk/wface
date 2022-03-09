import * as React from 'react'
import { Radio, FormControlLabel } from '@mui/material'
import { RadioProps } from '@mui/material/Radio'

export interface WRadioProps extends RadioProps {
  label: string
}

export class WRadio extends React.Component<WRadioProps, {}> {
  public render() {
    return <FormControlLabel label={this.props.label} control={<Radio {...this.props} />} />
  }
}