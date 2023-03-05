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
  renderInput?: DatePickerProps["renderInput"];
}

export const WDatePicker: React.FC<WDatePickerProps> =((fieldProps:WDatePickerProps) => {
  const {id="",clearable=true,format="dd.MM.yyyy",fullWidth= true,  showTodayButton=true  } = fieldProps;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns as any}>
    <DatePicker
      {...fieldProps}
      renderInput={(props: any) => (
        <WTextField
          {...props}
          {...fieldProps}
          fullWidth={fullWidth}
        />
      )}
    />

  </LocalizationProvider>
  );
});
