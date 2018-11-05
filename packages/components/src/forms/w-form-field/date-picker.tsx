import * as React from 'react';
import WField from './w-field';
import { WDatePicker, WDatePickerProps } from '../../inputs/w-date-picker';
import BaseFieldProps from './base-field-props';

export type DatePickerProps = BaseFieldProps & WDatePickerProps & {

}

export const DatePicker = (fieldProps: DatePickerProps) => (
  <WField
    name={fieldProps.name}
    component={props => (
      <WDatePicker
        {...props.field}
        label={fieldProps.label}
        {...fieldProps}
        onChange={date => props.form.setFieldValue(fieldProps.name, date)}
      />
    )}
  />
)