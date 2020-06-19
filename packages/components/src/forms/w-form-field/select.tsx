import * as React from 'react';
import WField from './w-field';
import { WSelect, WSelectProps } from '../../inputs/w-select';
import BaseFieldProps from './base-field-props';
import { byString } from '../util';

export type SelectProps = BaseFieldProps & WSelectProps & {

}

export const Select = (fieldProps: SelectProps) => (
  <WField
    name={fieldProps.name}
    useFastField={fieldProps.useFastField}
    component={props => (
      <WSelect        
        {...props.field}
        {...fieldProps}    
        error={byString(props.form.errors, fieldProps.name)}
        helperText={byString(props.form.errors, fieldProps.name)}              
        onChange={(value, object) => {
          props.form.setFieldValue(fieldProps.name, value);
          fieldProps.onChange && fieldProps.onChange(value, object);
        }}
      />
    )}
  />
)