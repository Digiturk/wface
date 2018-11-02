import * as React from 'react';
import DatePicker, { DatePickerProps } from 'material-ui-pickers/DatePicker';
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/MuiPickersUtilsProvider';

export interface WDatePickerProps extends DatePickerProps {
  fullWidth?: boolean
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
    value: null,
  }

  public render() {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker {...this.props} />
      </MuiPickersUtilsProvider>
    );
  }
}