import * as React from 'react';
import AdapterDateFns from '@date-io/date-fns';
import { DatePicker, DatePickerProps, LocalizationProvider } from '@mui/lab';
import { BaseComponentProps } from '../../base/base-component-props';
import { WTextField } from '../w-text-field';

export type WDatePickerProps = BaseComponentProps & DatePickerProps & {
  fullWidth?: boolean;
  format?: string;
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
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          {...this.props}
          renderInput={(props: any) => <WTextField {...props} fullWidth={this.props.fullWidth} />}
        />

      </LocalizationProvider>
    );
  }
}