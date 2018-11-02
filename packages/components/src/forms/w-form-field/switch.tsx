import * as React from 'react';
import WField from './w-field';
import { WSwitch, WSwitchProps } from '../../inputs/w-switch';
import BaseFieldProps from './base-field-props';
import { WGrid } from '../../layouts/w-grid';
import { WTypography } from '../../others/w-typography';

export type SwitchProps = BaseFieldProps & WSwitchProps & {
  label: string,
}

export const Switch = (fieldProps: SwitchProps) => (
  <WField
    component={props => (
      <WGrid container>
        <WGrid item xs={7} style={{alignSelf: 'center'}}><WTypography>{fieldProps.label}</WTypography></WGrid>
        <WGrid item xs={5} style={{textAlign: 'right'}}>
          <WSwitch
            {...fieldProps}
            checked={props.field.value[fieldProps.name]}
            onChange={event =>
              props.form.setFieldValue(fieldProps.name, event.target.checked)
            }
          />
        </WGrid>
      </WGrid>
    )}
  />
)