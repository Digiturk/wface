import * as React from 'react';
import TimePicker, { TimePickerProps } from 'material-ui-pickers/TimePicker';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';

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
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <TimePicker {...this.props}/>
      </MuiPickersUtilsProvider>
    );
  }
}