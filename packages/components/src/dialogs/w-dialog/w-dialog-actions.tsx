import * as React from 'react';
import DialogActions, { DialogActionsProps } from '@mui/material/DialogActions'

export interface WDialogActionsProps extends DialogActionsProps {}

export class WDialogActions extends React.Component<DialogActionsProps, {}> {
  public render() {
    return <DialogActions {...this.props}/>
  }
}
