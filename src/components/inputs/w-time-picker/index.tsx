import * as React from 'react';
import { TimePicker, TimePickerProps } from '@mui/x-date-pickers';
import { BaseComponentProps } from '../../base/base-component-props';
import { WTextField } from '../w-text-field';
import { DistributiveOmit } from '@mui/types';


export type WTimePickerProps = BaseComponentProps & DistributiveOmit<TimePickerProps, "renderInput"> & {
  fullWidth?: boolean,
  format?: string;
  helperText?: string;
  error?:string;
}


export const WTimePicker: React.FC<WTimePickerProps> =((props:WTimePickerProps) => {
  const {error, helperText, id="",ampm= false, format="HH:mm", fullWidth= true } = props;

  return (
    <TimePicker
      {...props}
      // slots={{
      //   textField: (props: any) => <WTextField {...props} fullWidth={fullWidth} />
      // }}
      slotProps={{
        textField: {
          error: !!error,
          helperText: error ?? helperText,
          fullWidth,
        },
      }}
    />
  );
});


