import * as React from 'react';
import WField from './w-field';
import { WTimePicker, WTimePickerProps } from '../../inputs/w-time-picker';
import BaseFieldProps from './base-field-props';

export type TimePickerProps = BaseFieldProps & WTimePickerProps & {

}

export const TimePicker = (fieldProps: TimePickerProps) => (
  <WField
    name={fieldProps.name}
    component={props => (
      <WTimePicker
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