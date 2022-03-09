import * as React from 'react';
import AdapterDateFns from '@date-io/date-fns';
import { DatePicker, DatePickerProps, LocalizationProvider } from '@mui/lab';
import { BaseComponentProps } from '../../base/base-component-props';

export type WDatePickerProps = BaseComponentProps & DatePickerProps & {
  fullWidth?: boolean;
  format?: string;
}

export class WDatePicker extends React.Component<WDatePickerProps, {}> {
  static defaultProps: WDatePickerProps = {
    id: '',
    clearable: true,
    format: "dd.MM.yyyy",
    fullWidth: true,
    showTodayButton: true,
    value: null,
    onChange: null,
    renderInput: null
  }

  public render() {
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker {...this.props} />
      </LocalizationProvider>
    );
  }
}