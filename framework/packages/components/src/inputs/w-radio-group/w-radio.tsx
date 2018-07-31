import * as React from 'react'
import { WFormControlLabel } from '../../forms/w-form-control-label'
import { Radio } from '@material-ui/core'
import { RadioProps } from '@material-ui/core/Radio'

export interface WRadioProps extends RadioProps {
  label: string
}

export class WRadio extends React.Component<WRadioProps, {}> {
  public render() {
    return <WFormControlLabel control={<Radio {...this.props} />} {...this.props}/>
  }
}