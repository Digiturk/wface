import React from 'react';
import { WPaper } from '../../layouts/w-paper';
import { WIcon } from '../../medias/w-icon';
import { WIconButton } from '../../buttons';
import { WTypography } from '../../others/w-typography';
import { BaseComponentProps } from '../../base/base-component-props';
import makeStyles from '@mui/styles/makeStyles';
import classNames from 'classnames';


export type WNotificationBarProps = BaseComponentProps & {
  text: string;
  type?: "error" | "warning" | "info" | "success";
  classes?: any;
  onCloseClick?: () => void; // TODO: kendisini gizleme konusunda wrapperindan yardim almamalı. 
}

const useStyles = makeStyles((theme: any) => ({
  notification: {
    padding: '4px 4px 4px 16px'
  },
  error: {
    backgroundColor: `${theme.palette.error.main} !important`
  },
  warning: {
    backgroundColor: `${theme.palette.warning.main} !important`
  },
  info: {
    backgroundColor: `${theme.palette.info.main} !important`
  },
  success: {
    backgroundColor: `${theme.palette.success.main} !important`
  },
  whiteText: {
    color: `${theme.palette.common.white} !important`
  }
}));

export const WNotificationBar: React.FC<WNotificationBarProps> = ({ id = '', type = 'info', text = '', onCloseClick }) => {
  const classes = useStyles();

  return (
    <WPaper className={classNames(classes.notification, classes[type || 'error'])}>
      <div style={{ display: 'flex' }}>
          <WTypography className={classes.whiteText} style={{ flex: 1, alignSelf: 'center' }}>
            {text}
          </WTypography>
        <WIconButton style={{ margin: 0, height: 'min-content' }}
          id={id + "-close"}
          onClick={() => onCloseClick && onCloseClick()}
          disableFocusRipple
          disableRipple
        >
          <WIcon className={classes.whiteText} style={{ fontSize: 15 }}>close</WIcon>
        </WIconButton>
      </div>
    </WPaper>
  );
}
