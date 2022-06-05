import * as React from 'react';
import { LocalizationProvider, TimePicker, TimePickerProps } from '@mui/lab';
import { BaseComponentProps } from '../../base/base-component-props';
import AdapterDateFns from '@date-io/date-fns'
import { WTextField } from '../w-text-field';

export type WTimePickerProps = BaseComponentProps & TimePickerProps & {
  fullWidth?: boolean,
  format?: string;
}

export class WTimePicker extends React.Component<WTimePickerProps, {}> {
  static defaultProps: Partial<WTimePickerProps> = {
    id: '',
    ampm: false,
    clearable: true,
    fullWidth: true,
    format: "HH:mm"
  }

  public render() {
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns as any}>
        <TimePicker
          {...this.props}
          renderInput={(props: any) => <WTextField {...props} fullWidth={this.props.fullWidth} />}
        />
      </LocalizationProvider>
    );
  }
}