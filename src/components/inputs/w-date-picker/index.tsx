import * as React from 'react';
import AdapterDateFns from '@date-io/date-fns';
import { DatePicker, DatePickerProps, LocalizationProvider } from '@mui/lab';
import { BaseComponentProps } from '../../base/base-component-props';
import { DistributiveOmit } from '@mui/types';
import { WTextField } from '../w-text-field';

export type WDatePickerProps = BaseComponentProps & DistributiveOmit<DatePickerProps, "renderInput"> & {
  fullWidth?: boolean;
  format?: string;
  helperText?: string;
  error?: string;
  renderInput?: DatePickerProps["renderInput"];
}

export const WDatePicker: React.FC<WDatePickerProps> = ((fieldProps: WDatePickerProps) => {
  const { error, helperText, fullWidth = true, format = "dd.MM.yyyy" } = fieldProps;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns as any}>
      <DatePicker
        {...fieldProps}
        inputFormat={format}
        renderInput={(props: any) => (
          <WTextField
            {...props}
            error={error}
            helperText={helperText}
            fullWidth={fullWidth}
          />
        )}
      />
    </LocalizationProvider>
  );
});
