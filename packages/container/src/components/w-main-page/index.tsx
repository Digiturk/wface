//#region imports 

import { withStyles, withTheme } from '@material-ui/core/styles';
import { WAppBar, WCircularProgress, WDrawer, WGrid, WIcon, WIconButton, WScrollBar, WTab, WTabs, WToolBar, WTypography, WPaper, WMessageDialog, WTheme, WTooltip, withSnackbar } from '@wface/components';
import IOC, { IAuthService, IMenuTreeItem, MenuTreeUtil } from "@wface/ioc";
import { AppContext, AppContextActions, ScreenData, WStore } from '@wface/store';
// @ts-ignore
import classNames from 'classnames';
import { Horizontal, WindowWidthType } from 'horizontal';
import * as React from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import MyProfileMenu from './my-profile-menu';
import Search from './search';
import NavList from './nav-list';

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

class WMainPage extends React.Component<WMainPageProps & WStore & DispatchProps, WMainPageState> {

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

  handleDrawerChange() {
    this.setState((prevState) => { return { drawerOpen: !prevState.drawerOpen } });
  };

  handleTabCloseButtonClick(event: any, screen: IMenuTreeItem) {
    event.stopPropagation();
    this.closeScreen(screen);
  }

  handleTabButton(event: any, screenData: ScreenData) {
    // if (screenData.menuTreeItem.notClosable || screenData.mode === "loading") {
    if (screenData.menuTreeItem.notClosable) {
      return;
    }

    event.persist();
    if (event.button == 1) {
      this.closeScreen(screenData.menuTreeItem);
    }
  }

  closeScreen = (screen: IMenuTreeItem) => {
    const closingScreen = this.props.appContext.openedScreens.find(s => s.menuTreeItem.id === screen.id);

    if (closingScreen && closingScreen.confirmOnClose) {
      this.setState({ showConfirmCloseScreenDialog: true, closingScreen });
    }
    else {
      this.props.closeScreen(screen);
    }
  }

  closeAllOpenedScreens = () => {
    if (this.props.appContext.openedScreens.some(screen => screen.confirmOnClose)) {
      this.props.enqueueSnackbar("Kaydedilmemiş ekranlar var. Lütfen öncelikle onları kapatın.", {
        variant: 'warning',
        autoHideDuration: 5000,
        action: <WIconButton id="btn-close-confirm-dialog"><WIcon style={{ color: '#ffffff99' }} iconSize="small">close</WIcon></WIconButton>
      });
    }
    else {
      this.props.appContext.openedScreens.filter(screen => !screen.menuTreeItem.notClosable).forEach(screen => {
        this.props.closeScreen(screen.menuTreeItem);
      })
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

  onMenuItemClicked = (screen: IMenuTreeItem) => {
    if (Horizontal.getType() !== WindowWidthType.LG) {
      this.setState({ drawerOpen: false })
    }

    this.props.openScreen(screen);
  }

  //#endregion

  //#region Render

  renderTabs = (classes) => {
    const screenType = Horizontal.getType();
    return (
      <WTabs
        id="tabs-screens"
        variant={
          (screenType == WindowWidthType.LG && this.props.appContext.openedScreens.length > 7) ||
            (screenType == WindowWidthType.MD && this.props.appContext.openedScreens.length > 5) ||
            (screenType == WindowWidthType.SM && this.props.appContext.openedScreens.length > 4) ||
            (screenType == WindowWidthType.XS && this.props.appContext.openedScreens.length > 2)
            ? "scrollable" : undefined
        }
        // variant="scrollable"
        scrollButtons="auto"
        scrollButtonStyle={{ color: 'white' }}
        centered
        value={this.props.appContext.currentScreen && this.props.appContext.currentScreen.menuTreeItem.id}
        onChange={(event, value) => {
          MenuTreeUtil.menuTreeForEach(this.props.appContext.menuTree, item => {
            if (item.id === value) {
              this.props.openScreen(item);
              return true;
            }
            return false;
          });
        }}
      >
        {
          this.props.appContext.openedScreens.map(screen => {
            const hasRightGrid = !screen.menuTreeItem.notClosable || screen.mode === "loading";

            const label = (
              <WGrid container alignItems="center">
                <WGrid item xs={hasRightGrid ? 10 : 12}>
                  {screen.menuTreeItem.text.length > 25 ?
                    (screen.menuTreeItem.text.substr(0, 25) + "...") : screen.menuTreeItem.text}
                </WGrid>
                {hasRightGrid &&
                  <WGrid item xs={2} zeroMinWidth>
                    {screen.mode === "loading" ?
                      <div style={{ minWidth: 39 }}>
                        <WCircularProgress size={25} style={{ color: 'white' }} />
                      </div>
                      :
                      <WIconButton
                        component="span"
                        id={"btn-close-screen-" + screen.menuTreeItem.id}
                        onClick={(e) => {
                          this.handleTabCloseButtonClick(e, screen.menuTreeItem);
                          e.preventDefault();
                        }}>
                        <WIcon className={classes.whiteText} style={{ fontSize: 15 }}>{screen.confirmOnClose ? "lens" : "close"}</WIcon>
                      </WIconButton>
                    }
                  </WGrid>
                }
              </WGrid>
            );
            return <WTab
              id={"tab-screen-" + screen.menuTreeItem.id}
              key={screen.menuTreeItem.id}
              label={label}
              classes={{
                labelContainer: classes.tabLabelContainer
              }}
              value={screen.menuTreeItem.id}
              onMouseUp={e => this.handleTabButton(e, screen)}
            />
          })
        }
      </WTabs>
    );
  }

  renderConfirmCloseScreenDialog = () => {
    if (!this.state.showConfirmCloseScreenDialog) {
      return null;
    }
    return (
      <WMessageDialog
        open={this.state.showConfirmCloseScreenDialog}
        title="Uyarı"
        buttons="YesNo"
        text={this.state.closingScreen.confirmOnCloseMessage}
        onButtonClick={(e, button) => {
          this.setState({ showConfirmCloseScreenDialog: false }, () => {
            if (button === "Yes") {
              this.props.closeScreen(this.state.closingScreen.menuTreeItem);
            }
          })
        }}
      />
    )
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root + " main-page"}>
        <WAppBar id="main-app-bar" position="fixed" className={classes.appBar} elevation={this.props.theme.designDetails.defaultElevation}>
          <WToolBar id="main-tool-bar" variant="dense" className={classes.toolbar}>
            <WIconButton
              id="main-hamburger-button"
              color="inherit"
              aria-label="open drawer"
              style={{ transition: 'all ease 250ms', transform: this.state.drawerOpen ? 'rotate(180deg)' : 'none' }}
              onClick={this.handleDrawerChange.bind(this)}
            >
              <WIcon >{this.state.drawerOpen && Horizontal.getType() !== WindowWidthType.LG ? "close" : "menu"}</WIcon>
            </WIconButton>
            <span>
              <WTypography variant="h6" color="inherit" noWrap className={classes.flex}>
                {this.props.appContext.configuration.projectName}
              </WTypography>
            </span>
            <div style={{ flexGrow: 1 }} />
            {this.props.appContext.configuration.search && <Search />}
            <MyProfileMenu items={this.props.appContext.configuration.rightContextItems} />
          </WToolBar>
          <div style={{ display: 'flex' }}>
            <div style={{ flex: 1, maxWidth: '100%' }}>
              {this.renderTabs(classes)}
            </div>
            {this.props.appContext.openedScreens.filter(screen => !screen.menuTreeItem.notClosable).length > 0 &&
              <WTooltip title="Close All Tabs">
                <WIconButton id="btn-close-all-screens" onClick={this.closeAllOpenedScreens}>
                  <WIcon style={{ color: '#FFFFFF66' }} iconSize="small">close</WIcon>
                </WIconButton>
              </WTooltip>
            }
          </div>

        </WAppBar>
        <WDrawer
          variant="persistent"
          open={this.state.drawerOpen}
          anchor="left"
          classes={{
            paper: classes.drawerPaper,
          }}
          PaperProps={{
            style: { border: 'none' },
            elevation: this.props.theme.designDetails.defaultElevation
          }}
        >
          <div style={{ minHeight: 96 }} />
          <div style={{ height: 'calc(100% - 96px)', overflow: 'none' }}>
            <WScrollBar>
              <NavList menuTree={this.props.appContext.menuTree} onItemClicked={this.onMenuItemClicked} />
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
          [classes.contentShift]: this.state.drawerOpen,
          [classes[`contentShift-left`]]: this.state.drawerOpen,
        })}>
          <div style={{ minHeight: 96 }} />
          <WScrollBar>
            {
              this.props.appContext.openedScreens.map(screen => {
                if (this.props.appContext.currentScreen.menuTreeItem.id === screen.menuTreeItem.id) {
                  const component = <div style={{ width: '100%', height: 'calc(100% - 8px)' }} key={"screen-" + screen.menuTreeItem.id}><this.props.appContext.configuration.components.ScreenWrapper screen={screen} /></div>
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
        {this.renderConfirmCloseScreenDialog()}
      </div>
    );
  }

  //#endregion
};

const screenData = Horizontal.getData();


const drawerWidth = screenData.widthType === WindowWidthType.XS ? screenData.width : 240;
const styles: any = (theme: any) => ({
  root: {
    height: '100%',
    zIndex: theme.zIndex.drawer + 1,
    overflow: 'hidden',
  },
  flex: {
    flex: 1,
    display: 'inline'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerPaper: {
    width: drawerWidth,
    height: '100%'
  },
  tabLabelContainer: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 10,
    textTransform: 'none',
    maxWidth: 144,
    wordBreak: 'break-word'
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

export default connect<WStore, DispatchProps, WMainPageProps>(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(withTheme()(withSnackbar(WMainPage) as any) as any) as any) as any)