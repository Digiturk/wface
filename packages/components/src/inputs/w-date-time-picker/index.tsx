import * as React from 'react';
import DateTimePicker, { DateTimePickerProps } from 'material-ui-pickers/DateTimePicker';
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/MuiPickersUtilsProvider';

export interface WDateTimePickerProps extends DateTimePickerProps {}

export class WDateTimePicker extends React.Component<WDateTimePickerProps, {}> {
  static defaultProps: WDateTimePickerProps = {
    ampm: false,
    clearable: true,
    fullWidth: true,
    format:"dd.MM.yyyy HH:mm",
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
        <DateTimePicker {...this.props} />
      </MuiPickersUtilsProvider>
    );
  }
}