import * as React from 'react';
import WField from './w-field';
import { WSwitch, WSwitchProps } from '../../inputs/w-switch';
import BaseFieldProps from './base-field-props';
import { WGrid } from '../../layouts/w-grid';
import { WTypography } from '../../others/w-typography';

export type SwitchProps = BaseFieldProps & WSwitchProps & {
  label: string,
}

export const Switch = React.forwardRef((fieldProps: SwitchProps, ref: any) => (
  <WField
    useFastField={fieldProps.useFastField}
    component={(props: any) => (
      <WGrid container>
        <WGrid item xs={7} style={{alignSelf: 'center'}}><WTypography>{fieldProps.label}</WTypography></WGrid>
        <WGrid item xs={5} style={{textAlign: 'right'}}>
          <WSwitch
            ref={ref}
            {...fieldProps}
            checked={props.field.value[fieldProps.name]}
            onChange={event => {
              props.form.setFieldValue(fieldProps.name, event.target.checked)
              fieldProps.onChange && fieldProps.onChange(event, event.target.checked);
            }}
          />
        </WGrid>
      </WGrid>
    )}
  />
));