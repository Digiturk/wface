import * as React from 'react';
import WField from './w-field';
import { WCheckbox, WCheckboxProps } from '../../inputs/w-checkbox';
import BaseFieldProps from './base-field-props';

export type CheckboxProps = BaseFieldProps & WCheckboxProps & {

}

export const Checkbox = (fieldProps: CheckboxProps) => (
  <WField
    component={props => (
      <WCheckbox
        {...fieldProps}
        label={fieldProps.label}
        checked={props.field.value[fieldProps.name]}
        onChange={event =>
          props.form.setFieldValue(fieldProps.name, event.target.checked)
        }
      />
    )}
  />
)