import { IConfiguration, WIconButton, WDrawer, WBox } from '../../../';
// @ts-ignore
import React, { FC } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { useAppContext } from '../../../store';

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
  const { toggleRightDrawer, rightDrawerOpen } = useAppContext();


  return (
    <React.Fragment>
      {options?.buttonComponent
        ? <options.buttonComponent />
        : (
          <WIconButton
            className={classes.button}
            id="right-drawer-icon-button"
            onClick={() => toggleRightDrawer()}
            icon={options?.buttonIcon || "chrome_reader_mode"}
          />
        )
      }

      <WDrawer
        anchor="right"
        open={rightDrawerOpen}
        onClose={() => toggleRightDrawer(false)}
      >
        <div style={{ minHeight: 96 }} />
        <WBox className={classes.content} style={options?.contentBoxStyle}>
          {options?.contentComponent && <options.contentComponent />}
        </WBox>
      </WDrawer>
    </React.Fragment>
  );
};

export default RightDrawer;