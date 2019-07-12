//#region imports 

import { withStyles, withTheme } from '@material-ui/core/styles';
import { WScrollBar, WTheme, withSnackbar } from '@wface/components';
import IOC, { IAuthService, IMenuTreeItem, MenuTreeUtil } from "@wface/ioc";
import { AppContext, AppContextActions, ScreenData, WStore } from '@wface/store';
import { Horizontal, WindowWidthType } from 'horizontal';
import * as React from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


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

class MainPage extends React.Component<MainPageProps & WStore & DispatchProps, MainPageState> {

  constructor(props: any, context: any) {
    super(props, context);

    const screenType = Horizontal.getType();
    this.state = {
      drawerOpen: screenType == WindowWidthType.LG,
      showConfirmCloseScreenDialog: false
    }
  }

  componentDidMount() {
    const { match, location, setMenuTree, openScreen } = this.props;
    const getScreenUrl = this.getScreenUrl;

    const authService = IOC.get<IAuthService>("IAuthService");
    authService.getMenuTree()
      .then(menuTree => {
        setMenuTree(menuTree);

        let currentScreen: IMenuTreeItem;
        MenuTreeUtil.menuTreeForEach(menuTree, item => {
          if ((match.url + getScreenUrl(item)) === location.pathname) {
            currentScreen = item;
            return true;
          }
          return false;
        });

        if (currentScreen) {
          openScreen(currentScreen);
        }
      })
  }

  //#endregion

  //#region Events 

  closeScreen = (screen: IMenuTreeItem) => {
    const closingScreen = this.props.appContext.openedScreens.find(s => s.menuTreeItem.id === screen.id);

    if (closingScreen && closingScreen.confirmOnClose) {
      this.setState({ showConfirmCloseScreenDialog: true, closingScreen });
    }
    else {
      this.props.closeScreen(screen);
    }
  }

  //#endregion

  //#region Methods 

  getScreenUrl(screen: IMenuTreeItem) {
    return "/" + screen.screen;
  }

  componentDidUpdate() {
    let url = (this.props as any).match.url
    if (this.props.appContext.currentScreen) {
      url += this.getScreenUrl(this.props.appContext.currentScreen.menuTreeItem);
    }

    if (url != (this.props as any).location.pathname) {
      this.props.history.replace(url);
    }
  }

  //#endregion

  //#region Render

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root + " main-page"}>
        <main className={classes.content}>
          <WScrollBar>
            {
              this.props.appContext.openedScreens.map(screen => {
                if (this.props.appContext.currentScreen.menuTreeItem.id === screen.menuTreeItem.id) {
                  const component = <div style={{ width: '100%', height: '100%' }} key={"screen-" + screen.menuTreeItem.id}><this.props.appContext.configuration.components.ScreenWrapper screen={screen} /></div>
                  return component;
                }
                else if (screen.mode === "loading") {
                  const component = <div style={{ display: 'none' }} key={"screen-" + screen.menuTreeItem.id}><this.props.appContext.configuration.components.ScreenWrapper screen={screen} /></div>;
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

  //#endregion
};

const styles: any = (theme: any) => ({
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
});

const mapStateToProps = (state: WStore) => ({
  appContext: state.appContext,
  userContext: state.userContext
} as WStore);
const mapDispatchToProps = (dispatch: any) => ({
  setMenuTree: (menuTree: IMenuTreeItem[]) => dispatch(AppContextActions.setMenuTree(menuTree)),
  openScreen: (menuTreeItem: IMenuTreeItem, initialValues?: any) => dispatch(AppContextActions.openScreen({ menuTreeItem, initialValues })),
  closeScreen: (menuTreeItem: IMenuTreeItem) => dispatch(AppContextActions.closeScreen(menuTreeItem))
});

export default connect<WStore, DispatchProps, MainPageProps>(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(withTheme()(withSnackbar(MainPage) as any) as any) as any) as any)