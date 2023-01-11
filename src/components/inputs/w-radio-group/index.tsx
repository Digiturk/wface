import * as React from 'react'
import { RadioGroup } from '@mui/material'
import { RadioGroupProps } from '@mui/material/RadioGroup'
import { WRadio } from './w-radio';
import { WTypography } from '../../others/w-typography';
import { BaseComponentProps } from '../../base/base-component-props';

export interface WRadioGroupOption {
  label: string; 
  value: any;
  disabled?: boolean;
}

export type WRadioGroupProps = BaseComponentProps & RadioGroupProps & { 
  axis?: 'horizontal' | 'vertical';
  label: string;
  options?: WRadioGroupOption[];
}

export const WRadioGroup: React.FC<WRadioGroupProps> =((props:WRadioGroupProps) => {
  const {id="",axis="horizontal", label=""  } = props;

  let { children } = props; 
  if (props.options) {
    children = props.options.map(option => <WRadio {...option}/>)
  }

  const style = { 
    flexDirection: axis == "horizontal" ? "row" : "column"
  }

  const labelStyle = {
    marginRight: 15, 
    alignSelf: axis == "horizontal" ? "center" : "left"
  }

  return (
    <RadioGroup {...props} style={style as any}>
      <WTypography style={labelStyle}>{label}</WTypography>
      {children}
    </RadioGroup>
  );
});


export * from './w-radio';