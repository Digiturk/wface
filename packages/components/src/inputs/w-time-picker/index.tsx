import * as React from 'react';
import TimePicker, { TimePickerProps } from 'material-ui-pickers/TimePicker';
import { DateType } from 'material-ui-pickers/constants/prop-types'
import DateFnsUtils from '@date-io/date-fns'
import MuiPickersUtilsProvider from 'material-ui-pickers/MuiPickersUtilsProvider';
import { Omit } from '@material-ui/core';
import { BaseComponentProps } from '../../base/base-component-props';

export type WTimePickerProps = BaseComponentProps & Omit<Omit<TimePickerProps, "value">, "onChange"> & { 
  fullWidth?: boolean,
  value?: DateType,
  onChange?: (date: DateType) => void,
}

export class WTimePicker extends React.Component<WTimePickerProps, {}> {
  static defaultProps: WTimePickerProps = {
    id: '',
    ampm: false,
    clearable: true,
    fullWidth: true,
    format: "HH:mm",
    keyboard: true,
    keyboardIcon: 'access_time',
    mask: [/\d/, /\d/, ':', /\d/, /\d/],
    onChange: undefined,
    value: null,
  }

  public render() {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <TimePicker {...this.props} value={this.props.value} onChange={this.props.onChange}/>
      </MuiPickersUtilsProvider>
    );
  }
}