import * as React from 'react';
import WField from './w-field';
import { WDateTimePicker, WDateTimePickerProps } from '../../inputs/w-date-time-picker';
import BaseFieldProps from './base-field-props';

export type DatePickerProps = BaseFieldProps & Omit<Omit<WDateTimePickerProps, "value">, "onChange"> & {
  onChange?: (date: Date) => void;
}

export const DateTimePicker = (fieldProps: DatePickerProps) => (
  <WField
    name={fieldProps.name}
    useFastField={fieldProps.useFastField}
    component={props => (
      <WDateTimePicker
        {...props.field}
        label={fieldProps.label}
        {...fieldProps}
        error={props.form.errors[fieldProps.name]}
        helperText={props.form.errors[fieldProps.name]}
        onChange={date => {
          props.form.setFieldValue(fieldProps.name, date);
          fieldProps.onChange && fieldProps.onChange(date);
        }}
      />
    )}
  />
)
