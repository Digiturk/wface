import * as React from 'react';
import WField from './w-field';
import { WTextField, WTextFieldProps } from '../../inputs/w-text-field';
import BaseFieldProps from './base-field-props';

export type TextFieldProps = BaseFieldProps & WTextFieldProps & {

}

export const TextField = (fieldProps: TextFieldProps) => (
  <WField
    name={fieldProps.name}      
    component={props => (
      <WTextField
        label={fieldProps.label}
        {...props.field}          
        fullWidth
      />
    )}
  />
)