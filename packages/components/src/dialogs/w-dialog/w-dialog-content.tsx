import * as React from 'react';
import DialogContent, { DialogContentProps } from '@material-ui/core/DialogContent'
import { createStyles, withStyles } from '@material-ui/core/styles';

export interface WDialogContentProps extends DialogContentProps {}

export class WDialogContentInner extends React.Component<DialogContentProps, {}> {
  public render() {
    const { classes } = this.props;
    return <DialogContent {...this.props} className={classes.root}/>
  }
}

const styles = theme => createStyles({ root: { overflow: 'visible' } });

export const WDialogContent = withStyles(styles)(WDialogContentInner);