//#region imports 

import { withStyles, withTheme, makeStyles } from '@material-ui/core/styles';
import { WScrollBar, WTheme, withSnackbar, useSnackbar } from '@wface/components';
import IOC, { IAuthService, IMenuTreeItem, MenuTreeUtil } from "@wface/ioc";
import { AppContext, AppContextActions, ScreenData, WStore } from '@wface/store';
import { Horizontal, WindowWidthType } from 'horizontal';
import * as React from "react";
import { FC, useCallback, useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';


//#endregion 

export interface MainPageProps {
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

interface MainPageState {
  drawerOpen?: boolean;
  showConfirmCloseScreenDialog: boolean;
  closingScreen?: ScreenData;
}


const useStyles = makeStyles((theme: any) => ({
  root: {
    height: '100%',
    zIndex: theme.zIndex.drawer + 1,
    overflow: 'hidden',
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
}));

const MainPage: FC<MainPageProps & WStore & DispatchProps> = (props) => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const url = window.location.href;
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState<boolean>(Horizontal.getType() == WindowWidthType.LG);
  const [showConfirmCloseScreenDialog, setShowConfirmCloseScreenDialog] = useState<boolean>(false);
  const [closingScreen, setClosingScreen] = useState<any>(null);
  const { userContext, appContext } = useSelector((state: any) => state);
  const dispatch = useDispatch();
  const setMenuTree = useCallback((menuTree: IMenuTreeItem[]) => dispatch(AppContextActions.setMenuTree(menuTree)), []);
  const getScreenUrl = useCallback((screen: IMenuTreeItem) => "/" + screen.screen, []);
  const openScreen = useCallback(
    (menuTreeItem: IMenuTreeItem, initialValues?: any) => dispatch(
      AppContextActions.openScreen({ menuTreeItem, initialValues })
    ),
    []);
  const closeScreen = useCallback((screen: IMenuTreeItem) => {
    const closingScreen = appContext.openedScreens.find(s => s.menuTreeItem.id === screen.id);

    if (closingScreen && closingScreen.confirmOnClose) {
      setShowConfirmCloseScreenDialog(true);
      setClosingScreen(closingScreen);
    }
    else {
      dispatch(AppContextActions.closeScreen(screen))
    }
  }, [appContext.openedScreens]);

  useEffect(() => {
    const authService = IOC.get<IAuthService>("IAuthService");
    authService.getMenuTree()
      .then(menuTree => {
        setMenuTree(menuTree);

        let currentScreen: IMenuTreeItem;
        MenuTreeUtil.menuTreeForEach(menuTree, item => {
          if ((url + getScreenUrl(item)) === pathname) {
            currentScreen = item;
            return true;
          }
          return false;
        });

        if (currentScreen) {
          openScreen(currentScreen);
        }
      })
  }, [pathname, openScreen, url]);

  useEffect(() => {    
    let newUrl = url;
    if (appContext.currentScreen) {
      newUrl += getScreenUrl(appContext.currentScreen.menuTreeItem);
    }

    if (newUrl != pathname) {
      navigate(newUrl);
    }
  }, [url, appContext.currentScreen, appContext.currentScreen.menuTreeItem, pathname]);

  return (
    <div className={classes.root + " main-page"}>
      <main className={classes.content}>
        <WScrollBar>
          {
            appContext.openedScreens.map(screen => {
              if (appContext.currentScreen.menuTreeItem.id === screen.menuTreeItem.id) {
                const component = <div style={{ width: '100%', height: '100%' }} key={"screen-" + screen.menuTreeItem.id}><appContext.configuration.components.ScreenWrapper screen={screen} /></div>
                return component;
              }
              else if (screen.mode === "loading") {
                const component = <div style={{ display: 'none' }} key={"screen-" + screen.menuTreeItem.id}><appContext.configuration.components.ScreenWrapper screen={screen} /></div>;
                return component;
              }

              return null;
            })
          }
        </WScrollBar>
      </main>
    </div>
  );
}

export default MainPage;