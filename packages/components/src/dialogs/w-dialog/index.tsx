import * as React from 'react';
import Dialog, { DialogProps } from '@material-ui/core/Dialog'
import { createStyles, withStyles } from '@material-ui/core/styles';

export interface WDialogProps extends DialogProps { }

class WDialogInner extends React.Component<WDialogProps, {}> {  
  public render() {
    const { classes } = this.props;
    return <Dialog {...this.props} classes={{ paperScrollPaper: classes.root }}/>
  }
}

const styles = theme => createStyles({ root: { overflow: 'visible' } });

export const WDialog = withStyles(styles)(WDialogInner);