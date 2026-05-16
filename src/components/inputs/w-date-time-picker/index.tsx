import * as React from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateTimePicker, DateTimePickerProps, LocalizationProvider } from '@mui/x-date-pickers';
import { BaseComponentProps } from '../../base/base-component-props';
import { WTextField } from '../w-text-field';
import { DistributiveOmit } from '@mui/types';



export type WDateTimePickerProps = BaseComponentProps & DistributiveOmit<DateTimePickerProps<any>, "renderInput"> & {
  fullWidth?: boolean,
  format?: string;
  helperText?: string;
  error?:string;
}

export const WDateTimePicker: React.FC<WDateTimePickerProps> =((fieldProps:WDateTimePickerProps) => {
  const { error, helperText, fullWidth = true, format = "dd.MM.yyyy HH:mm:ss" } = fieldProps;

  return (
   <LocalizationProvider dateAdapter={AdapterDateFns as any}>
        <DateTimePicker
          {...fieldProps}
          format={format}
          slots={{
            textField: (props: any) => <WTextField {...props} error={error} helperText={helperText} fullWidth={fullWidth}/>
          }}
        />
      </LocalizationProvider>
  );
});

