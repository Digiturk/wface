import { createStyles, withStyles } from '@material-ui/core';
// @ts-ignore
import classNames from 'classnames';
import * as React from 'react';
import { WIconButton } from '../../buttons/w-icon-button';
import { WPaper } from '../../layouts/w-paper';
import { WIcon } from '../../medias/w-icon';
import { WTypography } from '../../others/w-typography';
import { BaseComponentProps } from '../../base/base-component-props';
import { WTheme } from '../../others/w-theme-provider/w-theme';

export type WNotificationBarProps = BaseComponentProps & {
  text: string;
  type?: "error" | "warning" | "info" | "success";
  classes?: any;
  onCloseClick?: () => void; // TODO: kendisini gizleme konusunda wrapperindan yardim almamalı. 
}

class WNotificationBarInner extends React.Component<WNotificationBarProps, {}> {
  static defaultProps: WNotificationBarProps = {
    id: '',
    text: '',
    type: 'info'
  }

  constructor(props: any) {
    super(props);
  }

  public render() {
    const { classes } = this.props;

    return (
      <WPaper className={classNames(classes.notification, classes[this.props.type || 'error'])}>
        <div style={{ display: 'flex' }}>
            <WTypography className={classes.whiteText} style={{ flex: 1, alignSelf: 'center' }}>
              {this.props.text}
            </WTypography>
          <WIconButton style={{ margin: 0, height: 'min-content' }}
            id={this.props.id + "-close"}
            onClick={() => this.props.onCloseClick && this.props.onCloseClick()}
            disableFocusRipple
            disableRipple
          >
            <WIcon className={classes.whiteText} style={{ fontSize: 15 }}>close</WIcon>
          </WIconButton>
        </div>
      </WPaper>
    );
  }
}

const styles = (theme: WTheme) => createStyles({
  notification: {
    padding: '4px 4px 4px 16px'
  },
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

export const WNotificationBar = withStyles(styles)(WNotificationBarInner); 