import * as React from 'react';
// @ts-ignore
import classNames from 'classnames';
import { WButton, WButtonProps } from '../w-button';
import { WCircularProgress } from '../../progress/w-circular-progress';
import { WLinearProgress } from '../../progress/w-linear-progress';
import { createStyles, withStyles } from '@material-ui/styles';
import { BaseComponentProps } from '../../base/base-component-props';
import { WTheme } from '../../others/w-theme-provider/w-theme';

export type WLoadingButtonProps = BaseComponentProps & WButtonProps & {
  isLoading?: boolean;
  classes?: any;
  status?: "error" | "normal" | "success";
  progressType?: "circular" | "linear";
}

class WLoadingButtonInner extends React.Component<WLoadingButtonProps, {}> {
  public render() {
    const { classes, isLoading, ...buttonProps } = this.props;
    const buttonClassname = classNames({
      [classes.buttonError]: this.props.status == "error",
      [classes.buttonSuccess]: this.props.status == "success",
    });

    return (
      <span className={classes.wrapper}>
        <WButton
          {...buttonProps}
          variant="contained"
          color="primary"
          className={buttonClassname}
          disabled={isLoading}>
          {isLoading ?
            (this.props.progressType == "circular" ?
              <WCircularProgress size={24} className={classes.circularProgress} /> :
              <>{this.props.children}<WLinearProgress className={classes.linearProgress} /></>) :
            this.props.children
          }
        </WButton>
      </span>
    )
  }
}

const styles = (theme: WTheme) => createStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    position: 'relative',
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
  linearProgress: {
    color: theme.palette.primary.main,
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 3,
    width: '100%',
    borderRadius: '0px 0px 4px 4px'
  },
  circularProgress: {
    color: theme.palette.primary.main,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
});

export const WLoadingButton = withStyles(styles, { withTheme: true })(WLoadingButtonInner);
