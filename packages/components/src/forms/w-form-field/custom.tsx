import * as React from 'react';
import WField from './w-field';
import { WTextField, WTextFieldProps } from '../../inputs/w-text-field';
import BaseFieldProps from './base-field-props';
import { Omit } from '@material-ui/core';

export interface ComponentProps {
  value: any;
  onChange: (value: any) => void;
}

export type CustomProps = BaseFieldProps & {
  component: any; //React.Component<ComponentProps>
  componentProps?: any;
}

export const Custom = (fieldProps: CustomProps) => (
  <WField
    name={fieldProps.name}
    component={props => {
      const X = fieldProps.component as any;
      return (
        <X
          {...props.field}        
          {...fieldProps}
          {...fieldProps.componentProps}
          value={props.form.values[fieldProps.name]}
          onChange={value => {
            props.field.onChange({
              target: {
              name: props.field.name,
              value: value
              }
            });            
          }}
        />
      )
    }}
  />
)