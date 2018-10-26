import * as React from 'react';
import DateTimePicker, { DateTimePickerProps } from 'material-ui-pickers/DateTimePicker';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';

export interface WDateTimePickerProps extends DateTimePickerProps {}

export class WDateTimePicker extends React.Component<WDateTimePickerProps, {}> {
  static defaultProps: WDateTimePickerProps = {
    clearable: true,
    onChange: undefined,
    value: null,
    format:"DD.MM.YYYY HH:mm",
    ampm: false
  }

  public render() {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DateTimePicker {...this.props}/>
      </MuiPickersUtilsProvider>
    );
  }
}