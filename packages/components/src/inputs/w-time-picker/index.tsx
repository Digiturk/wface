import * as React from 'react';
import  { LocalizationProvider, TimePicker, TimePickerProps } from '@mui/lab';
import { BaseComponentProps } from '../../base/base-component-props';
import AdapterDateFns from '@date-io/date-fns'

export type WTimePickerProps = BaseComponentProps & TimePickerProps & { 
  fullWidth?: boolean,
  format?: string;
}

export class WTimePicker extends React.Component<WTimePickerProps, {}> {
  static defaultProps: WTimePickerProps = {
    id: '',
    ampm: false,
    clearable: true,
    fullWidth: true,
    format: "HH:mm",
    onChange: null,
    value: null,
    renderInput: null
  }

  public render() {
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <TimePicker {...this.props} />
      </LocalizationProvider>
    );
  }
}