import * as React from 'react'
import { Radio, FormControlLabel } from '@mui/material'
import { RadioProps } from '@mui/material/Radio'

export interface WRadioProps extends RadioProps {
  label: string
}

export const WRadio: React.FC<WRadioProps> = React.forwardRef((props) => {
  return (
    <FormControlLabel label={props.label} control={<Radio {...props} />} />
  );
});

