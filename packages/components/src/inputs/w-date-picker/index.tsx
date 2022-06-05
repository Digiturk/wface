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

export class WDatePicker extends React.Component<WDatePickerProps, {}> {
  static defaultProps: Partial<WDatePickerProps> = {
    id: '',
    clearable: true,
    format: "dd.MM.yyyy",
    fullWidth: true,
    showTodayButton: true
  }

  public render() {
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns as any}>
        <DatePicker
          {...this.props}
          renderInput={(props: any) => (
            <WTextField
              {...props}
              fullWidth={this.props.fullWidth}
              helperText={this.props.helperText}
            />
          )}
        />

      </LocalizationProvider>
    );
  }
}