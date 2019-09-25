import * as React from 'react';
import { MuiPickersUtilsProvider, KeyboardDateTimePicker, DateTimePicker, DateTimePickerProps } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns'
import { BaseComponentProps } from '../../base/base-component-props';

export type WDateTimePickerProps = BaseComponentProps & DateTimePickerProps & {
  fullWidth?: boolean,
  keyboard?: boolean
}

export class WDateTimePicker extends React.Component<WDateTimePickerProps, {}> {
  static defaultProps: WDateTimePickerProps = {
    id: '',
    ampm: false,
    clearable: true,
    format: "dd.MM.yyyy HH:mm",
    fullWidth: true,
    keyboard: true,
    onChange: undefined,
    showTodayButton: true,
    value: null,
  }

  private renderPicker = () => {
    if (this.props.keyboard) {
      return <KeyboardDateTimePicker {...this.props} />;
    }
    else {
      return <DateTimePicker {...this.props} />;
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