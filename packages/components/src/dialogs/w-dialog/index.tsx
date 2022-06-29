import * as React from 'react';
import Dialog, { DialogProps } from '@mui/material/Dialog'
import createStyles from '@mui/styles/createStyles';
import withStyles from '@mui/styles/withStyles';
import { WTheme } from '../../others/w-theme-provider/w-theme';
import { BaseComponentProps } from '../../base/base-component-props';

export type WDialogProps = BaseComponentProps & DialogProps & {
  theme?: WTheme;
}

export const  WDialogInner: React.FC<WDialogProps> = (props: WDialogProps) => {
  const { id="",open=false,scroll="paper",classes} = props;

  return <Dialog {...props} classes={{ paperScrollPaper: classes.root }} PaperProps={{ elevation: props.theme.designDetails.defaultElevation, ...props.PaperProps }} />

}

const styles = (theme: WTheme) => createStyles({ root: {} });
//classes hatası aldığımdan style bu şekilde bırakıldı
export const WDialog = withStyles(styles, { withTheme: true })(WDialogInner);

export * from './w-dialog-actions';
export * from './w-dialog-content-text';
export * from './w-dialog-content';
export * from './w-dialog-title';

