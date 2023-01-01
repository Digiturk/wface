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

export const WDateTimePicker: React.FC<WDateTimePickerProps> =((props:WDateTimePickerProps) => {
  const {id="",ampm= false,clearable=true, format= "dd.MM.yyyy HH:mm",fullWidth= true,  showTodayButton=true  } = props;

  return (
   <LocalizationProvider dateAdapter={AdapterDateFns as any}>
        <DateTimePicker
          {...props}
          renderInput={(props: any) => <WTextField {...props} fullWidth={fullWidth}/>}
        />
      </LocalizationProvider>
  );
});
