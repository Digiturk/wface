import * as React from 'react';
import { DateTimePicker, DateTimePickerProps, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@date-io/date-fns'
import { BaseComponentProps } from '../../base/base-component-props';
import { WTextField } from '../w-text-field';
import { DistributiveOmit } from '@mui/types';



export type WDateTimePickerProps = BaseComponentProps & DistributiveOmit<DateTimePickerProps, "renderInput"> & {
  fullWidth?: boolean,
  format?: string;
  renderInput?: DateTimePickerProps["renderInput"];
}

export const WDateTimePicker: React.FC<WDateTimePickerProps> =((fieldProps:WDateTimePickerProps) => {
  const {id="",ampm= false,clearable=true, format= "dd.MM.yyyy HH:mm",fullWidth= true,  showTodayButton=true  } = fieldProps;

  return (
   <LocalizationProvider dateAdapter={AdapterDateFns as any}>
        <DateTimePicker
          {...fieldProps}
          renderInput={(props: any) => <WTextField {...props} {...fieldProps} fullWidth={fullWidth}/>}
        />
      </LocalizationProvider>
  );
});

