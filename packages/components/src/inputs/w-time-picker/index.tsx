import * as React from 'react';
import TimePicker, { TimePickerProps } from 'material-ui-pickers/TimePicker';
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/MuiPickersUtilsProvider';

export interface WTimePickerProps extends TimePickerProps {}

export class WTimePicker extends React.Component<WTimePickerProps, {}> {
  static defaultProps: WTimePickerProps = {
    ampm: false,
    clearable: true,
    fullWidth: true,
    format:"HH:mm",
    keyboard: true,
    keyboardIcon: 'access_time',
    mask: [/\d/, /\d/, ':', /\d/, /\d/],
    onChange: undefined,    
    value: null, 
  }

  public render() {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <TimePicker {...this.props}/>
      </MuiPickersUtilsProvider>
    );
  }
}