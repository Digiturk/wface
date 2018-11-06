import * as React from 'react';
import WField from './w-field';
import { WRadioGroup, WRadioGroupProps } from '../../inputs/w-radio-group';
import BaseFieldProps from './base-field-props';

export type RadioGroupProps = BaseFieldProps & WRadioGroupProps & {

}

export const RadioGroup = (fieldProps: RadioGroupProps) => (
  <WField
    name={fieldProps.name}
    component={props => (
      <WRadioGroup
        {...props.field}
        {...fieldProps}        
        onChange={(event, value) => {
          props.field.onChange(event, value);
          fieldProps.onChange && fieldProps.onChange(event, value);
        }}
      />
    )}
  />
)