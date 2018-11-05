import * as React from 'react';
import DatePicker, { DatePickerProps } from 'material-ui-pickers/DatePicker';
import { DateType } from 'material-ui-pickers/constants/prop-types'
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/MuiPickersUtilsProvider';
import { Omit } from '@material-ui/core';

// type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

export interface WDatePickerProps extends Omit<Omit<DatePickerProps, "value">, "onChange"> {
  fullWidth?: boolean,
  value?: DateType,
  onChange?: (date: DateType) => void,
}

export class WDatePicker extends React.Component<WDatePickerProps, {}> {
  static defaultProps: WDatePickerProps = {
    clearable: true,
    format: "dd.MM.yyyy",
    fullWidth: true,
    keyboard: true,
    keyboardIcon: 'date_range',
    mask: [/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/],
    onChange: undefined,
    showTodayButton: true,
    value: null
  }

  public render() {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker {...this.props} value={this.props.value} onChange={this.props.onChange}/>
      </MuiPickersUtilsProvider>
    );
  }
}