import { IConfiguration } from '@wface/ioc';
// @ts-ignore
import React, { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppContextActions } from '@wface/store';
import {
  WIconButton, WDrawer, WBox
} from '@wface/components';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme: any) => ({
  button: {
    color: theme.palette.background.default + ' !important'
  },
  content: {
    padding: theme.spacing(1),
    minWidth: 400
  }
}));


interface RightDrawerProps {
  options: IConfiguration["rightDrawer"];
}

const RightDrawer: FC<RightDrawerProps> = ({ options }) => {
  const classes = useStyles();
  const { appContext } = useSelector((state: any) => state);
  const dispatch = useDispatch();

  const toggle = useCallback((isOpen?: boolean) => {
    dispatch(AppContextActions.toggleRightDrawer(isOpen));
  }, []);

  return (
    <React.Fragment>
      {options.buttonComponent
        ? <options.buttonComponent />
        : (
          <WIconButton
            className={classes.button}
            id="right-drawer-icon-button"
            onClick={() => toggle()}
            icon={options.buttonIcon || "chrome_reader_mode"}
          />
        )
      }

      <WDrawer
        anchor="right"
        open={appContext.rightDrawerOpen}
        onClose={() => toggle(false)}
      >
        <div style={{ minHeight: 96 }} />
        <WBox className={classes.content} style={options.contentBoxStyle}>
          {options.contentComponent && <options.contentComponent />}
        </WBox>
      </WDrawer>
    </React.Fragment>
  );
};

export default RightDrawer;