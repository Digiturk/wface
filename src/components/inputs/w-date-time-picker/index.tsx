import * as React from 'react';
import { DateTimePicker, DateTimePickerProps } from '@mui/x-date-pickers';
import { BaseComponentProps } from '../../base/base-component-props';
import { WTextField } from '../w-text-field';
import { DistributiveOmit } from '@mui/types';



export type WDateTimePickerProps = BaseComponentProps & DistributiveOmit<DateTimePickerProps, "renderInput"> & {
  fullWidth?: boolean,
  format?: string;
  helperText?: string;
  error?:string;
}

export const WDateTimePicker: React.FC<WDateTimePickerProps> =((fieldProps:WDateTimePickerProps) => {
  const { error, helperText, fullWidth = true, format = "dd.MM.yyyy HH:mm:ss" } = fieldProps;

  return (
    <DateTimePicker
      {...fieldProps}
      format={format}
      // slots={{
      //   textField: (props: any) => <WTextField {...props} error={error} helperText={helperText} fullWidth={fullWidth}/>
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

