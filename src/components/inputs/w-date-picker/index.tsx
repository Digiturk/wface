import * as React from 'react';
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers';
import { BaseComponentProps } from '../../base/base-component-props';
import { DistributiveOmit } from '@mui/types';
import { WTextField } from '../w-text-field';

export type WDatePickerProps = BaseComponentProps & DistributiveOmit<DatePickerProps, "renderInput"> & {
  fullWidth?: boolean;
  format?: string;
  helperText?: string;
  error?: string;
}

export const WDatePicker: React.FC<WDatePickerProps> = ((fieldProps: WDatePickerProps) => {
  const { error, helperText, fullWidth = true, format = "dd.MM.yyyy" } = fieldProps;

  return (
    <DatePicker
      {...fieldProps}
      format={format} 
      // slots={{
      //   textField: (props) => (
      //     <WTextField
      //       {...props}
      //       error={error}
      //       helperText={helperText}
      //       fullWidth={fullWidth}
      //     />
      //   )
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
