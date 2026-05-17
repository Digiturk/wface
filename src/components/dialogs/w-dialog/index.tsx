import * as React from 'react';
import Dialog, { DialogProps } from '@mui/material/Dialog'
import { WTheme } from '../../others/w-theme-provider/w-theme';
import { BaseComponentProps } from '../../base/base-component-props';
import { useTheme } from '@mui/styles';
import makeStyles from '@mui/styles/makeStyles';

export type WDialogProps = BaseComponentProps & DialogProps & {
}

const useStyles = makeStyles((theme: any) => ({
  root: {
  }
}));

export const WDialog: React.FC<WDialogProps> = (props: WDialogProps) => {
  const { id = "", open = false, scroll = "paper", ...rest } = props;
  const theme = useTheme<WTheme>();
  const classes = useStyles();

  return (
    <Dialog
      {...rest}
      id={id}
      open={open}
      scroll={scroll}
      slotProps={{
        paper: {
          elevation: theme.designDetails?.defaultElevation,
        },
      }}
    />
  );
}

export * from './w-dialog-actions';
export * from './w-dialog-content-text';
export * from './w-dialog-content';
export * from './w-dialog-title';

