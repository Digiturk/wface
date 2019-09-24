import * as React from 'react';
import WField from './w-field';
import { WCheckbox, WCheckboxProps } from '../../inputs/w-checkbox';
import BaseFieldProps from './base-field-props';

export type CheckboxProps = BaseFieldProps & WCheckboxProps & {
}

export const Checkbox = React.forwardRef((fieldProps: CheckboxProps, ref: any) => (
  <WField
    useFastField={fieldProps.useFastField}
    component={props => (
      <WCheckbox
        ref={ref}
        {...fieldProps}
        label={fieldProps.label}
        checked={props.field.value[fieldProps.name]}      
        onChange={event => {
          props.form.setFieldValue(fieldProps.name, event.target.checked)
          fieldProps.onChange && fieldProps.onChange(event, event.target.checked);
        }}
      />
    )}
  />
));