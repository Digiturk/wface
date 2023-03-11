//#region imports 
import React from "react";
import { useTheme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import {
  IMenuTreeItem, MenuTreeUtil, AppContext, ScreenData,
  WAppBar, WCircularProgress, WDrawer, WIcon, WIconButton, WScrollBar,
  WTab, WTabs, WToolBar, WTypography,
  WMessageDialog, WTheme, WTooltip, useSnackbar, useAppContext
} from "../../../";
// @ts-ignore
import classNames from 'classnames';
import { Horizontal, WindowWidthType } from 'horizontal';

import { useNavigate, useLocation } from 'react-router';
import { MyProfileMenu } from './my-profile-menu';
import { Search } from './search';
import NavList from './nav-list';
import { FC, useState, useCallback, useEffect, useMemo } from 'react';
import RightDrawer from './right-drawer';

//#endregion 

export interface WMainPageProps {
  classes: any,
  location: any,
  match: any,
  history?: any,
  appContext: AppContext,
  theme?: WTheme;
  enqueueSnackbar?: (message: string, options: object) => void,
}

export interface DispatchProps {
  setMenuTree: (menuTree: IMenuTreeItem[]) => void;
  closeScreen: (menuTreeItem: IMenuTreeItem) => void;
  openScreen: (menuTreeItem: IMenuTreeItem) => void;
}

interface WMainPageState {
  drawerOpen?: boolean;
  showConfirmCloseScreenDialog: boolean;
  closingScreen?: ScreenData;
}

const screenData = Horizontal.getData();
const drawerWidth = screenData.widthType === WindowWidthType.XS ? screenData.width : 240;
const useStyles = makeStyles((theme: any) => ({
  root: {
    height: '100vh',
    zIndex: (theme.zIndex.drawer + 1) + ' !important',
    overflow: 'hidden',
  },
  flex: {
    flex: 1,
    display: 'inline'
  },
  appBar: {
    zIndex: (theme.zIndex.drawer + 1) + ' !important',
  },
  drawerPaper: {
    width: drawerWidth,
    height: '100%'
  },
  tabLabelContainer: {
    padding: '0px !important',
    paddingLeft: '5px !important',
    textTransform: 'none !important' as any,
    wordBreak: 'break-word',
    color: 'white !important'
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: 0, // theme.spacing.unit * 3
    minWidth: 0, // So the Typography noWrap works        
    display: 'flex',
    flexDirection: 'column',
    transition: 'all ease 250ms',
    height: 'inherit'
  },
  "content-left": {
    marginLeft: 0,
  },
  "content-right": {
    marginRight: 0
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'contentShift-left': {
    marginLeft: drawerWidth,
  },
  'contentShift-right': {
    marginRight: 0,
  },
  whiteText: {
    color: '#FFFFFFFF'
  },
  toolbar: {
    // ...theme.mixins.toolbar,
    height: 48,
    maxHeight: 48,
    '@media only screen and (max-width: 400px)': {
      paddingLeft: 0
    }
  },
}));

const WMainPage: FC = () => {
  const classes = useStyles();
  const theme = useTheme<any>();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { enqueueSnackbar } = useSnackbar();
  const appContext = useAppContext();
  const [drawerOpen, setDrawerOpen] = useState<boolean>(Horizontal.getType() == WindowWidthType.LG);
  const [showConfirmCloseScreenDialog, setShowConfirmCloseScreenDialog] = useState<boolean>(false);
  const [closingScreen, setClosingScreen] = useState<any>(null);
  const topHeight = useMemo(() => appContext.configuration.singleScreen ? 48 : 96, [appContext.configuration.singleScreen]);
  const getScreenUrl = useCallback((screen: IMenuTreeItem) => "/" + screen.screen, []);
  const handleDrawerChange = useCallback(() => setDrawerOpen(!drawerOpen), [drawerOpen]);
  const closeScreen = useCallback((screen: IMenuTreeItem) => {
    const newClosingScreen = appContext.openedScreens.find((s: any) => s.menuTreeItem.id === screen.id);
    if (newClosingScreen && newClosingScreen.confirmOnClose) {
      setShowConfirmCloseScreenDialog(true);
      setClosingScreen(newClosingScreen);
    }
    else {
      appContext.closeScreen(screen.id);
    }
  }, [appContext.openedScreens]);

  const handleTabCloseButtonClick = useCallback((event: any, screen: IMenuTreeItem) => {
    event.stopPropagation();
    closeScreen(screen);
  }, [closeScreen]);

  const handleTabButton = useCallback((event: any, screenData: ScreenData) => {
    if (screenData.menuTreeItem.notClosable) {
      return;
    }

    event.persist();
    if (event.button == 1) {
      closeScreen(screenData.menuTreeItem);
    }
    else {
      event.preventDefault();
    }
  }, [closeScreen]);

  const renderTabs = useCallback(() => {
    const screenType = Horizontal.getType();
    return (
      <WTabs
        id="tabs-screens"
        variant={
          (screenType == WindowWidthType.LG && appContext.openedScreens.length > 7) ||
            (screenType == WindowWidthType.MD && appContext.openedScreens.length > 5) ||
            (screenType == WindowWidthType.SM && appContext.openedScreens.length > 4) ||
            (screenType == WindowWidthType.XS && appContext.openedScreens.length > 2)
            ? "scrollable" : undefined
        }
        // variant="scrollable"
        scrollButtons="auto"
        scrollButtonStyle={{ color: 'white' }}
        centered
        indicatorColor="secondary"
        value={appContext.currentScreen && appContext.currentScreen.menuTreeItem.id}
        onChange={(event, value) => {
          MenuTreeUtil.menuTreeForEach(appContext.menuTree, item => {
            if (item.id === value) {
              appContext.openScreen(item);
              return true;
            }
            return false;
          });
        }}
      >
        {
          appContext.openedScreens.map((screen: any) => {
            const hasRightGrid = !screen.menuTreeItem.notClosable || screen.mode === "loading";

            const label = (
              <div style={{ display: 'flex', maxWidth: 144 }}>
                <div style={{ flex: 1, alignSelf: 'center' }}>
                  {screen.menuTreeItem.text.length > 25 ?
                    (screen.menuTreeItem.text.substr(0, 25) + "...") : screen.menuTreeItem.text}
                </div>
                {hasRightGrid &&
                  <div>
                    {screen.mode === "loading" ?
                      <div style={{ minWidth: 39 }}>
                        <WCircularProgress size={25} style={{ color: 'white' }} />
                      </div>
                      :
                      <WIconButton
                        // component="div"
                        id={"btn-close-screen-" + screen.menuTreeItem.id}
                        onClick={(e) => {
                          handleTabCloseButtonClick(e, screen.menuTreeItem);
                          e.preventDefault();
                        }}>
                        <WIcon className={classes.whiteText} style={{ fontSize: 15 }}>{screen.confirmOnClose ? "lens" : "close"}</WIcon>
                      </WIconButton>
                    }
                  </div>
                }
              </div>
            );
            return <WTab
              id={"tab-screen-" + screen.menuTreeItem.id}
              key={screen.menuTreeItem.id}
              label={label}
              classes={{
                root: classes.tabLabelContainer
              }}
              value={screen.menuTreeItem.id}
              onMouseUp={e => handleTabButton(e, screen)}
            />
          })
        }
      </WTabs>
    );
  }, [appContext.openedScreens, appContext.currentScreen, appContext.openScreen, handleTabCloseButtonClick, handleTabButton]);

  const closeAllOpenedScreens = useCallback(() => {
    if (appContext.openedScreens.some((screen: any) => screen.confirmOnClose)) {
      enqueueSnackbar("Kaydedilmemiş ekranlar var. Lütfen öncelikle onları kapatın.", {
        variant: 'warning',
        autoHideDuration: 5000,
        action: <WIconButton id="btn-close-confirm-dialog"><WIcon style={{ color: '#ffffff99' }} iconSize="small">close</WIcon></WIconButton>
      });
    }
    else {
      appContext.openedScreens.filter((screen: any) => !screen.menuTreeItem.notClosable).forEach((screen: any) => {
        closeScreen(screen.menuTreeItem);
      })
    }
  }, [appContext.openedScreens, closeScreen]);

  const onMenuItemClicked = useCallback((screen: IMenuTreeItem) => {
    if (Horizontal.getType() !== WindowWidthType.LG) {
      setDrawerOpen(false);
    }

    appContext.openScreen(screen);
  }, [appContext.openScreen]);

  const renderConfirmCloseScreenDialog = useCallback(() => {
    if (!showConfirmCloseScreenDialog) {
      return null;
    }
    return (
      <WMessageDialog
        open={showConfirmCloseScreenDialog}
        title="Uyarı"
        buttons="YesNo"
        text={closingScreen.confirmOnCloseMessage}
        onButtonClick={(e, button) => {
          setShowConfirmCloseScreenDialog(false);
          if (button === "Yes") {
            closeScreen(closingScreen.menuTreeItem);
          }
        }}
      />
    )
  }, [showConfirmCloseScreenDialog, closingScreen]);

  useEffect(() => {
    
    appContext.configuration.authService.getMenuTree()
      .then(menuTree => {
        appContext.setMenuTree(menuTree);

        let currentScreen!: IMenuTreeItem;
        MenuTreeUtil.menuTreeForEach(menuTree, item => {
          if ('/main' + getScreenUrl(item) === window.location.pathname) {
            currentScreen = item;
            return true;
          }
          return false;
        });

        if (currentScreen) {
          appContext.openScreen(currentScreen);
        }
      })
  }, [appContext.setMenuTree, appContext.openScreen, getScreenUrl]);

  useEffect(() => {
    let newUrl = '/main';
    if (appContext.currentScreen) {
      newUrl += getScreenUrl(appContext.currentScreen.menuTreeItem);
    }

    if (newUrl != pathname) {
      navigate(newUrl, { replace: true });
    }
  }, [appContext.currentScreen, getScreenUrl, pathname]);

  return (
    <div className={classes.root + " main-page"}>
      <WAppBar id="main-app-bar" position="fixed" className={classes.appBar} elevation={theme.designDetails?.defaultElevation}>
        <WToolBar id="main-tool-bar" variant="dense" className={classes.toolbar}>
          <WIconButton
            id="main-hamburger-button"
            color="inherit"
            aria-label="open drawer"
            style={{ transition: 'all ease 250ms', transform: drawerOpen ? 'rotate(180deg)' : 'none' }}
            onClick={handleDrawerChange}
          >
            <WIcon >{drawerOpen && Horizontal.getType() !== WindowWidthType.LG ? "close" : "menu"}</WIcon>
          </WIconButton>
          <span>
            <WTypography variant="h6" color="inherit" noWrap className={classes.flex}>
              {appContext.configuration.projectName}
            </WTypography>
          </span>
          <div style={{ flexGrow: 1 }} />
          {appContext.configuration.customToolbarComponent && (
            <appContext.configuration.customToolbarComponent />
          )}
          {appContext.configuration.search && <Search />}
          <MyProfileMenu items={appContext.configuration.rightContextItems} />
          {appContext.configuration.rightDrawer && <RightDrawer options={appContext.configuration.rightDrawer} />}
        </WToolBar>
        {!appContext.configuration.singleScreen &&
          <div style={{ display: 'flex' }}>
            <div style={{ flex: 1, maxWidth: '100%' }}>
              {renderTabs()}
            </div>
            {appContext.openedScreens.filter((screen: any) => !screen.menuTreeItem.notClosable).length > 0 &&
              <WTooltip title="Close All Tabs">
                <WIconButton id="btn-close-all-screens" onClick={closeAllOpenedScreens}>
                  <WIcon style={{ color: '#FFFFFF66' }} iconSize="small">close</WIcon>
                </WIconButton>
              </WTooltip>
            }
          </div>
        }

      </WAppBar>
      <WDrawer
        variant="persistent"
        open={drawerOpen}
        anchor="left"
        classes={{
          paper: classes.drawerPaper,
        }}
        PaperProps={{
          style: { border: "none", ...theme.designDetails?.drawerDesign?.paper },
          elevation: theme.designDetails?.defaultElevation || 0,
        }}
      >
        <div style={{ minHeight: topHeight }} />
        <div style={{ height: `calc(100% - ${topHeight}px)`, overflow: 'none' }}>
          <WScrollBar>
            <NavList onItemClicked={onMenuItemClicked} />
          </WScrollBar>
          <div style={{ display: 'table', position: 'absolute', bottom: 0, height: 25, width: '100%' }}>
            <div style={{ display: 'table-cell', verticalAlign: 'middle', textAlign: 'center' }}>
              <span style={{ color: '#9c9999', fontSize: 10 }}>
                Developed based on <a style={{ fontWeight: 600, textDecoration: 'none', color: '#888' }} href="http://wface.digiturk.io" target="_blank">WFace</a>
              </span>
            </div>
          </div>
        </div>
      </WDrawer>

      <main className={classNames(classes.content, classes[`content-left`], {
        [classes.contentShift]: drawerOpen,
        [classes[`contentShift-left`]]: drawerOpen,
      })}>
        <div style={{ minHeight: topHeight }} />
        <WScrollBar>
          {
            appContext.openedScreens.map((screen: any) => {
              const Comp = appContext.configuration.components?.ScreenWrapper as any;
              if (appContext.currentScreen?.menuTreeItem.id === screen.menuTreeItem.id) {
                const component = <div style={{ width: '100%', height: 'calc(100% - 8px)' }} key={"screen-" + screen.menuTreeItem.id}><Comp screen={screen} /></div>
                return component;
              }
              else if (screen.mode === "loading") {
                const component = <div style={{ display: 'none' }} key={"screen-" + screen.menuTreeItem.id}><Comp screen={screen} /></div>;
                return component;
              }

              return null;
            })
          }
        </WScrollBar>
      </main>
      {renderConfirmCloseScreenDialog()}
    </div>
  );
}


export default WMainPage;