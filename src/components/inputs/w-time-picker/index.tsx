import * as React from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { TimePicker, TimePickerProps, LocalizationProvider } from '@mui/x-date-pickers';
import { BaseComponentProps } from '../../base/base-component-props';
import { WTextField } from '../w-text-field';
import { DistributiveOmit } from '@mui/types';


export type WTimePickerProps = BaseComponentProps & DistributiveOmit<TimePickerProps<any>, "renderInput"> & {
  fullWidth?: boolean,
  format?: string;
}


export const WTimePicker: React.FC<WTimePickerProps> =((props:WTimePickerProps) => {
  const {id="",ampm= false, format="HH:mm", fullWidth= true } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns as any}>
    <TimePicker
      {...props}
      slots={{
        textField: (props: any) => <WTextField {...props} fullWidth={fullWidth} />
      }}
    />
  </LocalizationProvider>
  );
});


