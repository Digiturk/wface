import * as React from 'react';
import WField from './w-field';
import { WDatePicker, WDatePickerProps } from '../../inputs/w-date-picker';
import BaseFieldProps from './base-field-props';

export type DatePickerProps = BaseFieldProps & WDatePickerProps & {

}

export const DatePicker = (fieldProps: DatePickerProps) => (
  <WField
    name={fieldProps.name}
    useFastField={fieldProps.useFastField}
    component={props => (
      <WDatePicker
        {...props.field}
        label={fieldProps.label}
        {...fieldProps}
        error={props.form.errors[fieldProps.name]}
        helperText={props.form.errors[fieldProps.name]}
        onChange={date => {
          props.form.setFieldValue(fieldProps.name, date)
          fieldProps.onChange && fieldProps.onChange(date);
        }}
      />
    )}
  />
)