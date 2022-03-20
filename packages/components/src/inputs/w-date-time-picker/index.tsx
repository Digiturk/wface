import * as React from 'react';
import { DateTimePicker, DateTimePickerProps, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@date-io/date-fns'
import { BaseComponentProps } from '../../base/base-component-props';
import { WTextField } from '../w-text-field';

export type WDateTimePickerProps = BaseComponentProps & DateTimePickerProps & {
  fullWidth?: boolean,
  format?: string;
}

export class WDateTimePicker extends React.Component<WDateTimePickerProps, {}> {
  static defaultProps: Partial<WDateTimePickerProps> = {
    id: '',
    ampm: false,
    clearable: true,
    format: "dd.MM.yyyy HH:mm",
    fullWidth: true,
    showTodayButton: true,
  }

  public render() {
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          {...this.props}
          renderInput={(props: any) => <WTextField {...props} fullWidth={this.props.fullWidth}/>}
        />
      </LocalizationProvider>
    );
  }
}