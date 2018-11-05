import * as React from 'react';
import WField from './w-field';
import { WDateTimePicker, WDateTimePickerProps } from '../../inputs/w-date-time-picker';
import BaseFieldProps from './base-field-props';

export type DatePickerProps = BaseFieldProps & WDateTimePickerProps & {

}

export const DateTimePicker = (fieldProps: DatePickerProps) => (
  <WField
    name={fieldProps.name}
    component={props => (
      <WDateTimePicker
        {...props.field}
        label={fieldProps.label}
        onChange={date => props.form.setFieldValue(fieldProps.name, date)}
      />
    )}
  />
)