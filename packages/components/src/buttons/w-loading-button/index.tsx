import * as React from 'react';
import classNames from 'classnames';
import { WButton, WButtonProps } from '../w-button';
import { WCircularProgress, WCircularProgressProps } from '../../progress/w-circular-progress';
import { WLinearProgress, WLinearProgressProps } from '../../progress/w-linear-progress';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import { createStyles, withStyles } from '@material-ui/core/styles';

export interface WLoadingButtonProps extends WButtonProps {
  isLoading?: boolean;
  status?: "error" | "normal" | "success";
  progressType?: "circular" | "linear";
}

class WLoadingButtonInner extends React.Component<WLoadingButtonProps & ClassNames & any, {}> {
  public render() {
    const { classes } = this.props;
    const buttonClassname = classNames({
      [classes.buttonError]: this.props.status == "error",
      [classes.buttonSuccess]: this.props.status == "success",
    });

    return (
      <span className={classes.wrapper}>
        <WButton
          {...this.props}
          variant="raised"
          color="primary"
          className={buttonClassname}
          disabled={this.props.isLoading}>
          {this.props.children}
          {this.props.isLoading &&
            (this.props.progressType == "circular" ?
              <WCircularProgress size={24} className={classes.circularProgress} /> :
              <WLinearProgress className={classes.linearProgress} />)
          }
        </WButton>
      </span>
    )
  }
}

const styles = (theme:any) => createStyles({
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
  fabProgress: {
    color: green[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
  linearProgress: {
    color: theme.palette.primary.main,
    position: 'absolute',
    bottom: 0,
    height: 3,
    width: '100%',
    borderRadius: '0px 0px 4px 4px'
  },
  circularProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
});
type ClassNames = { classes: { [className in keyof typeof styles]: string } };

const WLoadingButton = withStyles(styles)(WLoadingButtonInner)
export { WLoadingButton }
