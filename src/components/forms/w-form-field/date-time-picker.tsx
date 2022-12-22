import * as React from 'react';
import WField from './w-field';
import { WDateTimePicker, WDateTimePickerProps } from '../../inputs/w-date-time-picker';
import BaseFieldProps from './base-field-props';
import { byString } from '../util';

export type DatePickerProps = BaseFieldProps & Omit<Omit<WDateTimePickerProps, "value">, "onChange"> & {
  onChange?: (date: Date) => void;
}

export const DateTimePicker = (fieldProps: DatePickerProps) => (
  <WField
    name={fieldProps.name}
    useFastField={fieldProps.useFastField}
    component={(props: any) => (
      <WDateTimePicker
        {...props.field}
        // @ts-ignore
        label={fieldProps.label}
        {...fieldProps}
        error={byString(props.form.errors, fieldProps.name)}
        helperText={byString(props.form.errors, fieldProps.name)}        
        onChange={(date: any) => {
          props.form.setFieldValue(fieldProps.name, date);
          fieldProps.onChange && fieldProps.onChange(date);
        }}
      />
    )}
  />
)
