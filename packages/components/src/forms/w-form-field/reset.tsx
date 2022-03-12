import * as React from 'react';
import WField from './w-field';
import { WButton, WButtonProps } from '../../buttons/w-button';

export type ResetProps = WButtonProps & {

}

export const Reset = (fieldProps: ResetProps) => (
  <WField
    useFastField={false}
    component={props => (
      <WButton
        color="inherit"
        {...fieldProps}
        onClick={props.form.handleReset}
      >
        {fieldProps.children}
      </WButton>
    )}
  />
)