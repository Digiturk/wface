import * as React from 'react';
import WField from './w-field';
import { WButton, WButtonProps } from '../../buttons/w-button';

export type SubmitProps = WButtonProps & {

}

export const Submit = (fieldProps: SubmitProps) => (
  <WField
    name="submit"
    component={props =>      
      <WButton
        {...fieldProps}
        onClick={props.form.handleSubmit}
      />
    }
  />
)