import * as React from 'react';
import Dialog, { DialogProps } from '@material-ui/core/Dialog'
import { createStyles, withStyles } from '@material-ui/styles';
import { WTheme } from '../../others/w-theme-provider/w-theme';
import { BaseComponentProps } from '../../base/base-component-props';

export type WDialogProps = BaseComponentProps & DialogProps & {
  theme?: WTheme;
}

class WDialogInner extends React.Component<WDialogProps, any> {
  static defaultProps: WDialogProps = {
    id: "",
    open: false,
    scroll: "paper"
  }

  public render() {
    const { classes } = this.props;
    return <Dialog {...this.props} classes={{ paperScrollPaper: classes.root }} PaperProps={{ elevation: this.props.theme.designDetails.defaultElevation, ...this.props.PaperProps }} />
  }
}

const styles = (theme: WTheme) => createStyles({ root: {} });

export const WDialog = withStyles(styles, { withTheme: true })(WDialogInner);

export * from './w-dialog-actions';
export * from './w-dialog-content-text';
export * from './w-dialog-content';
export * from './w-dialog-title';
