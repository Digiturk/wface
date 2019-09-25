import * as React from 'react';
import  { MuiPickersUtilsProvider, KeyboardTimePicker, TimePicker, TimePickerProps } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns'
import { BaseComponentProps } from '../../base/base-component-props';

export type WTimePickerProps = BaseComponentProps & TimePickerProps & { 
  fullWidth?: boolean,
  keyboard?: boolean  
}

export class WTimePicker extends React.Component<WTimePickerProps, {}> {
  static defaultProps: WTimePickerProps = {
    id: '',
    ampm: false,
    clearable: true,
    fullWidth: true,
    format: "HH:mm",
    keyboard: true,    
    onChange: null,
    value: null,
  }

  private renderPicker = () => {
    if (this.props.keyboard) {
      return <KeyboardTimePicker {...this.props} />;
    }
    else {
      return <TimePicker {...this.props} />;
    }
  }

  public render() {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        {this.renderPicker()}
      </MuiPickersUtilsProvider>
    );
  }
}