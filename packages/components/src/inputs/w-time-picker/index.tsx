import * as React from 'react';
import TimePicker, { TimePickerProps } from 'material-ui-pickers/TimePicker';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';

export interface WTimePickerProps extends TimePickerProps {}

export class WTimePicker extends React.Component<WTimePickerProps, {}> {
  static defaultProps: WTimePickerProps = {
    clearable: true,
    onChange: undefined,
    value: null,
    ampm: false
  }

  public render() {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <TimePicker {...this.props}/>
      </MuiPickersUtilsProvider>
    );
  }
}