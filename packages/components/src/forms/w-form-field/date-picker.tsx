import * as React from 'react';
import WField from './w-field';
import { WDatePicker, WDatePickerProps } from '../../inputs/w-date-picker';
import BaseFieldProps from './base-field-props';
import { byString } from '../util';

export type DatePickerProps = BaseFieldProps & Omit<Omit<WDatePickerProps, "value">, "onChange"> & {
  onChange?: (date: Date) => void;
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
        error={byString(props.form.errors, fieldProps.name)}
        helperText={byString(props.form.errors, fieldProps.name)}        
        onChange={(date: any) => {
          props.form.setFieldValue(fieldProps.name, date)
          fieldProps.onChange && fieldProps.onChange(date);
        }}
      />
    )}
  />
)