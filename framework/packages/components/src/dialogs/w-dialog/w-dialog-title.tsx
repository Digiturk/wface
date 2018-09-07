import * as React from 'react';
import DialogTitle, { DialogTitleProps } from '@material-ui/core/DialogTitle'

export interface WDialogTitleProps extends DialogTitleProps {}

export class WDialogTitle extends React.Component<DialogTitleProps, {}> {
  public render() {
    return <DialogTitle {...this.props}/>
  }
}
