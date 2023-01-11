import * as React from 'react';
import Button from '@mui/material/Button';
import { ButtonProps } from '@mui/material/Button';
import { BaseComponentProps } from '../../base/base-component-props';
import makeStyles from '@mui/styles/makeStyles';
import { useTheme } from '@mui/styles';
import { WTheme } from '../../others';

const useStyles = makeStyles((theme: any) => ({
  root: {
    textTransform: 'none',
    boxShadow: theme.designDetails.defaultElevation ? '' : 'none',
  }
}));

export type WButtonProps = BaseComponentProps & ButtonProps & {
}

export const WButton: React.FC<WButtonProps> = React.forwardRef((props) => {
  const classes = useStyles();
  const theme = useTheme<WTheme>();

  return (
    <Button {...props} classes={classes} disableElevation={theme.designDetails?.defaultElevation === 0} />
  );
});
