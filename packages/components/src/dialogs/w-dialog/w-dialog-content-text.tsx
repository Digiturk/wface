import * as React from 'react';
import DialogContentText, { DialogContentTextProps } from '@mui/material/DialogContentText'

export interface WDialogContentTextProps extends DialogContentTextProps {}

export class WDialogContentText extends React.Component<DialogContentTextProps, {}> {
  public render() {
    return <DialogContentText {...this.props}/>
  }
}
