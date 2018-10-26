import * as React from 'react';
import DatePicker, { DatePickerProps } from 'material-ui-pickers/DatePicker';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';

export interface WDatePickerProps extends DatePickerProps {}

export class WDatePicker extends React.Component<WDatePickerProps, {}> {
  static defaultProps: WDatePickerProps = {
    clearable: true,
    onChange: undefined,
    value: null,
    format:"DD.MM.YYYY"
  }

  public render() {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker {...this.props}/>
      </MuiPickersUtilsProvider>
    );
  }
}