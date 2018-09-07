import * as React from 'react';
import Dialog, { DialogProps } from '@material-ui/core/Dialog'

export interface WDialogProps extends DialogProps {}

export class WDialog extends React.Component<WDialogProps, {}> {
  public render() {
    return <Dialog {...this.props}/>
  }
}
