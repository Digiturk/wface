//#region imports 

import { withStyles } from '@material-ui/core/styles';
import { WAppBar, WDrawer, WGrid, WIcon, WIconButton, WTab, WTabs, WToolBar, WTypography } from '@wface/components';
import { IAuthService, IMenuTreeItem, MenuTreeUtil, IConfiguration } from "@wface/ioc";
import { AppContextActions, WStore } from '@wface/store';
import * as classNames from 'classnames';
import * as React from "react";
import { connect } from 'react-redux';
import { Route, Switch, withRouter, Redirect } from 'react-router';
import WScreenWrapper from '../w-screen-wrapper';
import MyProfileMenu from './MyProfileMenu';
import NavList from './NavList';

//#endregion 

export interface WMainPageProps {
  classes: any,
  history?: any,
  configuration: IConfiguration
}

export interface DispatchProps {
  setMenuTree: (menuTree: IMenuTreeItem[]) => void;
  closeScreen: (menuTreeItem: IMenuTreeItem) => void;
  openScreen: (menuTreeItem: IMenuTreeItem) => void;
}

interface WMainPageState {
  drawerOpen?: boolean;
}

class WMainPage extends React.Component<WMainPageProps & WStore & DispatchProps, WMainPageState> {
  constructor(props:any, context:any) {
    super(props, context);

    this.state = {
      drawerOpen: true
    }
  }

  componentWillMount() {
    this.props.configuration.authService.getMenuTree()
      .then(menuTree => {
        this.props.setMenuTree(menuTree);          
        
        let currentScreen: IMenuTreeItem;
        MenuTreeUtil.menuTreeForEach(menuTree, item => {
          if (((this.props as any).match.url + this.getScreenUrl(item)) === (this.props as any).location.pathname) {
            currentScreen = item;
            return true;
          }
          return false;
        });

        if (currentScreen) {
          this.props.openScreen(currentScreen);
        }
      })
  }

  //#endregion

  //#region Events 

  handleDrawerChange() {
    this.setState((prevState) => { return { drawerOpen: !prevState.drawerOpen } });
  };

  handleTabCloseButtonClick(event:any, screen: IMenuTreeItem) {
    event.stopPropagation();
    this.props.closeScreen(screen);
  }

  handleTabButton(event:any, screen: IMenuTreeItem) {
    if(screen.notClosable) {
      return;
    }

    event.persist();
    if (event.button == 1) {
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
    if(this.props.appContext.currentScreen) {
      url += this.getScreenUrl(this.props.appContext.currentScreen.menuTreeItem);
    }

    if(url != (this.props as any).location.pathname) {
      this.props.history.replace(url);
    }
  }

  //#endregion

  //#region Render

  render() {    
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <WAppBar position="absolute" className={classes.appBar}>
          <WToolBar style={{minHeight:48}}>
            <WIconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerChange.bind(this)}
              className={classes.menuButton}
            >
              <WIcon>menu</WIcon>
            </WIconButton>
            <span>
              <WTypography variant="title" color="inherit" noWrap className={classes.flex}>
                {this.props.configuration.projectName}
              </WTypography>
              <WTypography variant="caption" color="inherit" noWrap className={classes.flex} style={{color: '#C5CAE9'}}>
                {" @WFace"}
              </WTypography>
            </span>
            <div style={{flexGrow: 1}} />
            <MyProfileMenu />
          </WToolBar>
          <WTabs
            value={this.props.appContext.currentScreen && this.props.appContext.currentScreen.menuTreeItem}
            onChange={(event, value) => this.props.openScreen(value)}
            centered
          >
            {
              this.props.appContext.openedScreens.map(screen => {
                const label = (
                  <WGrid container alignItems="center">
                    <WGrid item xs={screen.menuTreeItem.notClosable ? 12 : 10}>
                      {screen.menuTreeItem.text}
                    </WGrid>
                    {!screen.menuTreeItem.notClosable && 
                      <WGrid item xs={2} style={{ paddingRight: 10 }} >
                        <WIconButton
                          onClick={(e) => this.handleTabCloseButtonClick(e, screen.menuTreeItem)}>
                          <WIcon className={classes.whiteText} style={{ fontSize: 15 }}>close</WIcon>
                        </WIconButton>
                      </WGrid>
                    }
                  </WGrid>
                );
                return <WTab key={screen.menuTreeItem.id}
                  label={label}
                  classes={{
                    labelContainer: classes.tabLabelContainer
                  }}
                  value={screen.menuTreeItem}
                  onMouseUp={e => this.handleTabButton(e, screen.menuTreeItem)} />
              })
            }
          </WTabs>
        </WAppBar>
        <WDrawer
          variant="persistent"
          open={this.state.drawerOpen}
          anchor="left"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div style={{ height:'100%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: 96 }} />
            <div style={{ display: 'flex', flex: 1, minHeight: 0 }}>
              <div style={{flex: 1, overflow: 'auto'}}>
                <NavList menuTree={this.props.appContext.menuTree} onItemClicked={(screen:IMenuTreeItem) => this.props.openScreen(screen)} />
              </div>
            </div>
          </div>
        </WDrawer>
        <main className={classNames(classes.content, classes[`content-left`], {
          [classes.contentShift]: this.state.drawerOpen,
          [classes[`contentShift-left`]]: this.state.drawerOpen,
        })}>
          <div style={{ height: 96 }} />
          <div style={{ display: 'flex', flex: 1, minHeight: 0 }}>
            <div style={{flex: 1, overflow: 'auto'}}>
              <div style={{ padding: 10 }}>
                <Switch>
                  {
                    (() => {
                      return this.props.appContext.openedScreens.map(screen => {
                        const screenComponent = <WScreenWrapper screen={screen} configuration={this.props.configuration}/>
                        const route = <Route key={screen.menuTreeItem.id} path={(this.props as any).match.url + this.getScreenUrl(screen.menuTreeItem)} render={props => { return screenComponent; }} />
                        return route;
                      });
                    })()                
                  }
                  {/* {this.props.appContext.currentScreen && <Redirect to={(this.props as any).match.url + this.getScreenUrl(this.props.appContext.currentScreen.screenInfo)} />} */}
                </Switch>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  //#endregion
};

const drawerWidth = 300;
const styles: any = (theme:any) => ({
  root: {
    flexGrow: 1,
    height: '%100',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  flex: {
    flex: 1,
    display: 'inline'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  tabLabelContainer: {
    paddingTop: 0,
    paddingBottom: 0
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: 0, // theme.spacing.unit * 3
    minWidth: 0, // So the Typography noWrap works        
    display: 'flex',
    flexDirection: 'column',
  },
  "content-left": {
    marginLeft: -drawerWidth,
  },
  "content-right": {
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'contentShift-left': {
    marginLeft: 0,
  },
  'contentShift-right': {
    marginRight: 0,
  },
  whiteText: {
    color: '#bbb'
  }
});

const mapStateToProps = (state:WStore) => ({
  appContext: state.appContext,
  userContext: state.userContext
} as WStore);
const mapDispatchToProps = (dispatch:any) => ({
  setMenuTree: (menuTree: IMenuTreeItem[]) => dispatch(AppContextActions.setMenuTree(menuTree)),
  openScreen: (menuTreeItem: IMenuTreeItem, initialValues?: any) => dispatch(AppContextActions.openScreen({menuTreeItem, initialValues})),
  closeScreen: (menuTreeItem: IMenuTreeItem) => dispatch(AppContextActions.closeScreen(menuTreeItem))
});

export default connect<WStore, DispatchProps, WMainPageProps>(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(WMainPage as any) as any) as any)