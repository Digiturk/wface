import * as React from 'react';
import { WBasicDialog } from '../w-basic-dialog';
import { BaseComponentProps } from '../../base/base-component-props';

export type WMessageDialogProps = BaseComponentProps & { 
  open: boolean;
  title: string;
  text: string;
  icon?: 'error' | 'warning' | 'info' | 'success';
  buttons?: 'YesNo' | 'YesNoCancel' | 'Ok';
  onButtonClick?: (event:any, button: String) => void;  
}

export class WMessageDialog extends React.Component<WMessageDialogProps, {}> {
  static defaultProps: WMessageDialogProps = {
    id: "",
    open: false, 
    title: '', 
    text: '', 
    buttons: "Ok" 
  }

  private getButtons() {
    const result = [];

    if(this.props.buttons === "YesNo" || this.props.buttons === "YesNoCancel") {
      result.push({
        text: 'Yes',
        onClick: (event:any) => { this.props.onButtonClick && this.props.onButtonClick(event, 'Yes')}
      })

      result.push({
        text: 'No',
        onClick: (event:any) => { this.props.onButtonClick && this.props.onButtonClick(event, 'No')}
      })
    }

    if(this.props.buttons === "YesNoCancel") {
      result.push({
        text: 'Cancel',
        onClick: (event:any) => { this.props.onButtonClick && this.props.onButtonClick(event, 'Cancel')}
      })
    }

    if(this.props.buttons === "Ok") {
      result.push({
        text: 'Ok',
        onClick: (event:any) => { this.props.onButtonClick && this.props.onButtonClick(event, 'Ok')}
      })
    }

    return result;
  }

  public render() {
    return (
      <WBasicDialog
        id={this.props.id}
        open={this.props.open}
        title={this.props.title}
        children={this.props.text} 
        actions={this.getButtons()}
        fullWidth
      />
    )
  }
}