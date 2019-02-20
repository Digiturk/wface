import * as React from 'react';
import Dialog, { DialogProps } from '@material-ui/core/Dialog'
import { createStyles, withStyles } from '@material-ui/core/styles';

export interface WDialogProps extends DialogProps { }

class WDialogInner extends React.Component<WDialogProps, any> {
  static defaultProps: WDialogProps = { 
    open: false,
    scroll: "paper" 
  }

  public render() {
    const { classes } = this.props;
    return <Dialog {...this.props} classes={{ paperScrollPaper: classes.root }}/>
  }
}

const styles = theme => createStyles({ root: {  } });

export const WDialog = withStyles(styles)((props: WDialogProps) => <WDialogInner {...props}/>)
