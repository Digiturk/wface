import * as React from 'react';
import BaseFieldProps from './base-field-props';
import WField from './w-field';

export interface ComponentProps {
  value: any;
  onChange: (value: any) => void;
}

export type CustomProps = BaseFieldProps & {
  component: any; 
  componentProps?: any;
}

export const Custom = (fieldProps: CustomProps) => (
  <WField
    name={fieldProps.name}
    component={props => {
      const CustomComponent = fieldProps.component as any;
      return (
        <CustomComponent
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