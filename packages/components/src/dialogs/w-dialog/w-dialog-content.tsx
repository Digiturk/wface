import * as React from 'react';
import DialogContent, { DialogContentProps } from '@material-ui/core/DialogContent'

export interface WDialogContentProps extends DialogContentProps {}

export class WDialogContent extends React.Component<DialogContentProps, {}> {
  public render() {
    return <DialogContent {...this.props}/>
  }
}
