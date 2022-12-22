import * as React from 'react';
// @ts-ignore
import classNames from 'classnames';
import { WButton, WButtonProps } from '../w-button';
import { WCircularProgress } from '../../progress/w-circular-progress';
import { BaseComponentProps } from '../../base/base-component-props';
import makeStyles from '@mui/styles/makeStyles';

export type WLoadingButtonProps = BaseComponentProps & WButtonProps & {
  isLoading?: boolean;
  status?: "error" | "normal" | "success";
}


const useStyles = makeStyles((theme: any) => ({
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
}));


export const WLoadingButton: React.FC<WLoadingButtonProps> = (props: WLoadingButtonProps) => {
  const { isLoading, ...buttonProps } = props;
  const classes = useStyles();

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
  );
}
