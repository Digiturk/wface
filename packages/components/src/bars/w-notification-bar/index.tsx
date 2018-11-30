import { createStyles, withStyles } from '@material-ui/core';
import classNames from 'classnames';
import * as React from 'react';
import { WIconButton } from '../../buttons/w-icon-button';
import { WGrid } from '../../layouts/w-grid';
import { WPaper } from '../../layouts/w-paper';
import { WIcon } from '../../medias/w-icon';
import { WTypography } from '../../others/w-typography';

export interface WNotificationBarProps {
  text: string;
  type: string;
  classes?: any;
  onCloseClick?: () => void; // TODO: kendisini gizleme konusunda wrapperindan yardim almamalı. 
}

class WNotificationBarInner extends React.Component<WNotificationBarProps, {}> {
  constructor(props:any) {
    super(props);
  }

  public render() {
    const { classes } = this.props;

    return (
      <WPaper
        className={classNames(classes.notification, classes[this.props.type || 'error'])}
        elevation={4}>
        <WGrid container alignItems="center">
          <WGrid item xs={11}>
            <WTypography className={classes.whiteText} align="left">
              {this.props.text}
            </WTypography>
          </WGrid>
          <WGrid item xs={1} style={{ height: '100%' }}>
            <WIconButton style={{ margin: 0, padding: 0 }}
              onClick={() => this.props.onCloseClick && this.props.onCloseClick()}>
              <WIcon className={classes.whiteText} style={{ fontSize: 15 }}>close</WIcon>
            </WIconButton>
          </WGrid>
        </WGrid>
      </WPaper>
    );
  }
}

const styles = (theme:any) => createStyles({
  notification: theme.mixins.gutters({
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: theme.spacing.unit * 3,
  }),
  error: {
    backgroundColor: theme.palette.error.main
  },
  warning: {
    backgroundColor: theme.palette.warning.main
  },
  info: {
    backgroundColor: theme.palette.info.main
  },
  success: {
    backgroundColor: theme.palette.success.main
  },
  whiteText: {
    color: theme.palette.common.white
  }
});

const WNotificationBar = withStyles(styles)(WNotificationBarInner)
export { WNotificationBar };

