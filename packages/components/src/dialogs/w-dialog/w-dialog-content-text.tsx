import * as React from 'react';
import DialogContentText, { DialogContentTextProps } from '@material-ui/core/DialogContentText'

export interface WDialogContentTextProps extends DialogContentTextProps {}

export class WDialogContentText extends React.Component<DialogContentTextProps, {}> {
  public render() {
    return <DialogContentText {...this.props}/>
  }
}
