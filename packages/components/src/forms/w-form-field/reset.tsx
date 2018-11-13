import * as React from 'react';
import WField from './w-field';
import { WButton, WButtonProps } from '../../buttons/w-button';

export type ResetProps = WButtonProps & {

}

export const Reset = (fieldProps: ResetProps) => (
  <WField
    component={props => (
      <WButton
        color="default"
        {...fieldProps}
        onClick={props.form.handleReset}
      >
        {fieldProps.children}
      </WButton>
    )}
  />
)