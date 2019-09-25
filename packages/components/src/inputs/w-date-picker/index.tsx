import * as React from 'react';
import { DatePicker, DatePickerProps, MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns'
import { BaseComponentProps } from '../../base/base-component-props';

export type WDatePickerProps = BaseComponentProps & DatePickerProps & {
  fullWidth?: boolean,
  keyboard?: boolean,
}

export class WDatePicker extends React.Component<WDatePickerProps, {}> {
  static defaultProps: WDatePickerProps = {
    id: '',
    clearable: true,
    format: "dd.MM.yyyy",
    fullWidth: true,
    keyboard: true,
    // keyboardIcon: 'date_range',
    // mask: [/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/],    
    showTodayButton: true,
    value: null,
    onChange: null,
  }

  private renderPicker = () => {
    if (this.props.keyboard) {
      return <KeyboardDatePicker {...this.props} />;
    }
    else {
      return <DatePicker {...this.props} />;
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