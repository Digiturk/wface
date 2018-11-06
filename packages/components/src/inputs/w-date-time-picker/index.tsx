import * as React from 'react';
import DateTimePicker, { DateTimePickerProps } from 'material-ui-pickers/DateTimePicker';
import { DateType } from 'material-ui-pickers/constants/prop-types'
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/MuiPickersUtilsProvider';
import { Omit } from '@material-ui/core';

export interface WDateTimePickerProps extends Omit<Omit<DateTimePickerProps, "value">, "onChange"> {
  fullWidth?: boolean,
  value?: DateType,
  onChange?: (date: DateType) => void,
}

export class WDateTimePicker extends React.Component<WDateTimePickerProps, {}> {
  static defaultProps: WDateTimePickerProps = {
    ampm: false,
    clearable: true,
    format:"dd.MM.yyyy HH:mm",
    fullWidth: true,
    keyboard: true,
    keyboardIcon: 'event',
    mask: [/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, ':', /\d/, /\d/,],
    onChange: undefined,
    showTodayButton: true,
    value: null,    
  }

  public render() {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DateTimePicker {...this.props} value={this.props.value} onChange={this.props.onChange}/>
      </MuiPickersUtilsProvider>
    );
  }
}