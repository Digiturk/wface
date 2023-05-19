import * as React from 'react';
import { DateTimePicker, DateTimePickerProps, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@date-io/date-fns'
import { BaseComponentProps } from '../../base/base-component-props';
import { WTextField } from '../w-text-field';
import { DistributiveOmit } from '@mui/types';



export type WDateTimePickerProps = BaseComponentProps & DistributiveOmit<DateTimePickerProps, "renderInput"> & {
  fullWidth?: boolean,
  format?: string;
  helperText?: string;
  error?:string;
  renderInput?: DateTimePickerProps["renderInput"];
}

export const WDateTimePicker: React.FC<WDateTimePickerProps> =((fieldProps:WDateTimePickerProps) => {
  const { error, helperText, fullWidth = true } = fieldProps;

  return (
   <LocalizationProvider dateAdapter={AdapterDateFns as any}>
        <DateTimePicker
          {...fieldProps}
          renderInput={(props: any) => <WTextField {...props} error={error} helperText={helperText} fullWidth={fullWidth}/>}
        />
      </LocalizationProvider>
  );
});

