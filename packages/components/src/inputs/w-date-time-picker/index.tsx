import * as React from 'react';
import { DateTimePicker, DateTimePickerProps, LocalizationProvider  } from '@mui/lab';
import AdapterDateFns from '@date-io/date-fns'
import { BaseComponentProps } from '../../base/base-component-props';

export type WDateTimePickerProps = BaseComponentProps & DateTimePickerProps & {
  fullWidth?: boolean,
  format?: string;
}

export class WDateTimePicker extends React.Component<WDateTimePickerProps, {}> {
  static defaultProps: WDateTimePickerProps = {
    id: '',
    ampm: false,
    clearable: true,
    format: "dd.MM.yyyy HH:mm",
    fullWidth: true,
    onChange: undefined,
    showTodayButton: true,
    value: null,
    renderInput: null
  }

  public render() {
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker {...this.props} />
      </LocalizationProvider>
    );
  }
}