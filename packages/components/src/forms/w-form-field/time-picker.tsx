import * as React from 'react';
import WField from './w-field';
import { WTimePicker } from '../../inputs/w-time-picker';
import BaseFieldProps from './base-field-props';

export type TimePickerProps = BaseFieldProps & {

}

export const TimePicker = (fieldProps: TimePickerProps) => (
  <WField
    name={fieldProps.name}
    component={props => (
      <WTimePicker
        {...props.field}
        label={fieldProps.label}
        onChange={date => props.form.setFieldValue(fieldProps.name, date)}
      />
    )}
  />
)