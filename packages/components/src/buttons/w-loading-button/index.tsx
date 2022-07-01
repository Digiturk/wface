import * as React from 'react';
// @ts-ignore
import classNames from 'classnames';
import { WButton, WButtonProps } from '../w-button';
import { WCircularProgress } from '../../progress/w-circular-progress';
import createStyles from '@mui/styles/createStyles';
import withStyles from '@mui/styles/withStyles';
import { BaseComponentProps } from '../../base/base-component-props';
import { WTheme } from '../../others/w-theme-provider/w-theme';

export type WLoadingButtonProps = BaseComponentProps & WButtonProps & {
  isLoading?: boolean;
  classes?: any;
  status?: "error" | "normal" | "success";
}


 const WLoadingButtonInner: React.FC<WLoadingButtonProps> = (props: WLoadingButtonProps) => {
 
  const {classes, isLoading, ...buttonProps } = props;
  const buttonClassname = classNames({
    [classes.buttonError]: props.status == "error",
    [classes.buttonSuccess]: props.status == "success",
  });

  return (
    <WButton
      {...buttonProps}
      variant="contained"
      color="primary"
      className={buttonClassname}
      disabled={isLoading}>
      {isLoading
        ? <><WCircularProgress size={24} className={classes.circularProgress} /></>
        : props.children
      }
    </WButton>
  )

}

const styles = (theme: WTheme) => createStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  buttonError: {
    backgroundColor: theme.palette.error.main,
    '&:hover': {
      backgroundColor: theme.palette.error.dark,
    },
  },
  buttonSuccess: {
    backgroundColor: theme.palette.success.main,
    '&:hover': {
      backgroundColor: theme.palette.success.dark,
    },
  },
  circularProgress: {
    color: theme.palette.primary.main,
  },
});

export const WLoadingButton = withStyles(styles, { withTheme: true })(WLoadingButtonInner);

