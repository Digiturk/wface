import * as React from 'react';
import DialogContent, { DialogContentProps } from '@mui/material/DialogContent'
import createStyles from '@mui/styles/createStyles';
import withStyles from '@mui/styles/withStyles';
import { WTheme } from '../../others/w-theme-provider/w-theme';

export interface WDialogContentProps extends DialogContentProps { }

export class WDialogContentInner extends React.Component<DialogContentProps, {}> {
  public render() {
    const { classes } = this.props;
    return (
      <DialogContent {...this.props} className={classes.root}>
        {this.props.children}
      </DialogContent>
    );
  }
}

const styles = (theme: WTheme) => createStyles({
  root: {
  }
});

export const WDialogContent = withStyles(styles)(WDialogContentInner);
