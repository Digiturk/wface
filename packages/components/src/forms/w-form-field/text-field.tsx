import * as React from 'react';
import WField from './w-field';
import { WTextField, WTextFieldProps } from '../../inputs/w-text-field';
import BaseFieldProps from './base-field-props';

export type TextFieldProps = BaseFieldProps & WTextFieldProps & {

}

export const TextField = (fieldProps: TextFieldProps) => (
  <WField
    name={fieldProps.name}      
    useFastField={fieldProps.useFastField}
    component={props => (
      <WTextField
        {...props.field}        
        {...fieldProps}        
        fullWidth
        error={props.form.errors[fieldProps.name]}
        helperText={props.form.errors[fieldProps.name]}
        onChange={event => {
          props.field.onChange(event);
          fieldProps.onChange && fieldProps.onChange(event);
        }}
      />
    )}
  />
)