import React,{ useCallback } from 'react'
import { WIcon, WIconButton, WTheme, WToolBar, WTypography } from '../../../components'
import { Horizontal, WindowWidthType } from 'horizontal';
import makeStyles from "@mui/styles/makeStyles";
import { useConfiguration } from '../../../store';
import { Search } from './search';
import { MyProfileMenu } from './my-profile-menu';
import RightDrawer from './right-drawer';

const screenData = Horizontal.getData();
const drawerWidth =
  screenData.widthType === WindowWidthType.XS ? screenData.width : 240;
const useStyles = makeStyles((theme: any) => ({
  root: {
    height: "100vh",
    zIndex: theme.zIndex.drawer + 1 + " !important",
    overflow: "hidden",
  },
  flex: {
    flex: 1,
    display: "inline",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1 + " !important",
  },
  drawerPaper: {
    width: drawerWidth,
    height: "100%",
  },
  tabLabelContainer: {
    padding: "0px !important",
    paddingLeft: "5px !important",
    textTransform: "none !important" as any,
    wordBreak: "break-word",
    color: "white !important",
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: 0, // theme.spacing.unit * 3
    minWidth: 0, // So the Typography noWrap works
    display: "flex",
    flexDirection: "column",
    transition: "all ease 250ms",
    height: "inherit",
  },
  "content-left": {
    marginLeft: 0,
  },
  "content-right": {
    marginRight: 0,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  "contentShift-left": {
    marginLeft: drawerWidth,
  },
  "contentShift-right": {
    marginRight: 0,
  },
  whiteText: {
    color: "#FFFFFFFF",
  },
  toolbar: {
    // ...theme.mixins.toolbar,
    height: 48,
    maxHeight: 48,
    "@media only screen and (max-width: 400px)": {
      paddingLeft: 0,
    },
  },
}));

function ToolBar(props:any) {
  const classes = useStyles();
  const configuration = useConfiguration();
  const rightContextItems = configuration.useRightContextItems
    ? configuration.useRightContextItems()
    : [];
  const handleDrawerChange = useCallback(
    () => props.setDrawerOpen(!props.drawerOpen),
    [props.drawerOpen]
  );

  return (
   <>
   <WToolBar
          id="main-tool-bar"
          variant="dense"
          className={classes.toolbar}
        >
          
          {configuration.components?.Toolbar ? (
            <><configuration.components.Toolbar menuOpen={props.drawerOpen} onMenuToggle={handleDrawerChange}/></>
          ) : (
            <>
            <WIconButton
            id="main-hamburger-button"
            color="inherit"
            aria-label="open drawer"
            style={{
              transition: "all ease 250ms",
              transform: props.drawerOpen ? "rotate(180deg)" : "none",
            }}
            onClick={handleDrawerChange}
          >
            <WIcon>
              {props.drawerOpen && Horizontal.getType() !== WindowWidthType.LG
                ? "close"
                : "menu"}
            </WIcon>
          </WIconButton>
              <span>
                <WTypography
                  variant="h6"
                  color="inherit"
                  noWrap
                  className={classes.flex}
                >
                  {configuration.projectName}
                </WTypography>
              </span>
              <div style={{ flexGrow: 1 }} />

              {configuration.search && <Search />}
              <MyProfileMenu items={rightContextItems} />
              {configuration.rightDrawer && (
                <RightDrawer options={configuration.rightDrawer} />
              )}
            </>
          )}
        </WToolBar>
   </>
  )
}

export default ToolBar
