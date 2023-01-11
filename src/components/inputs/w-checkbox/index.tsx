import * as React from 'react'
import { Checkbox, FormControlLabel } from '@mui/material'
import { CheckboxProps } from '@mui/material/Checkbox'
import { BaseComponentProps } from '../../base/base-component-props';



export type WCheckboxProps = BaseComponentProps & CheckboxProps & { 
  label?: string
}

export const  WCheckbox :React.FC<WCheckboxProps>=React.forwardRef((props)=>{
    if(props.label) {
      return <FormControlLabel label={props.label} control={<Checkbox {...props} />}/>
    }
    else {
      return <Checkbox {...props} />
    }  
})
