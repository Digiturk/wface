import * as React from 'react';
import { LocalizationProvider, TimePicker, TimePickerProps } from '@mui/lab';
import { BaseComponentProps } from '../../base/base-component-props';
import AdapterDateFns from '@date-io/date-fns'
import { WTextField } from '../w-text-field';
import { DistributiveOmit } from '@mui/types';


export type WTimePickerProps = BaseComponentProps & DistributiveOmit<TimePickerProps, "renderInput"> & {
  fullWidth?: boolean,
  format?: string;
  renderInput?: TimePickerProps["renderInput"];
}


export const WTimePicker: React.FC<WTimePickerProps> =((props:WTimePickerProps) => {
  const {id="",ampm= false,clearable=true, format="HH:mm",fullWidth= true, } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns as any}>
    <TimePicker
      {...props}
      renderInput={(props: any) => <WTextField {...props} fullWidth={fullWidth} />}
    />
  </LocalizationProvider>
  );
});


