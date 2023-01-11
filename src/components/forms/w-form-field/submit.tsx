import * as React from 'react';
import WField from './w-field';
import { WButton, WButtonProps } from '../../buttons/w-button';

export type SubmitProps = WButtonProps & {

}

export const Submit = (fieldProps: SubmitProps) => (
  <WField
    name="submit"
    useFastField={false}
    component={(props: any) =>      
      <WButton
        {...fieldProps}
        onClick={props.form.handleSubmit}
      />
    }
  />
)