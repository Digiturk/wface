import * as React from 'react';
import WField from './w-field';
import { WSelect, WSelectProps } from '../../inputs/w-select';
import BaseFieldProps from './base-field-props';

export type SelectProps = BaseFieldProps & WSelectProps & {

}

export const Select = (fieldProps: SelectProps) => (
  <WField
    name={fieldProps.name}      
    component={props => (
      <WSelect        
        {...props.field}
        {...fieldProps}
        onChange={value => {
          if(fieldProps.isMulti) {
            props.form.setFieldValue(fieldProps.name, value.map(a => a.value))
          }
          else {
            props.form.setFieldValue(fieldProps.name, value.value)
          }
        }}
      />
    )}
  />
)