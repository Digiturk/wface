//#region imports 

import * as React from "react";
import { BrowserRouter } from 'react-router-dom'
import { withRouter, Route, Switch } from 'react-router'
import * as classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { Inject } from 'react.di';
import WLoginPage from '../w-login-page'

import { 
    WAppBar, WAppBarProps,
    WDivider, WDividerProps,
    WDrawer, WDrawerProps,
    WIconButton, WIconButtonProps,
    WTabs, WTabsProps,
    WTab, WTabProps,
    WToolbar, WToolbarProps,
    WTypography, WTypographyProps, WButton, WGrid
} from '@wface/components';
import MyProfileMenu from './MyProfileMenu';
import NavList from './NavList';
import { IAuthService, IMenuTreeItem } from "@wface/ioc";
import WMuiThemeProvider from "../w-container/WMuiThemeProvider";
import { Close } from "@material-ui/icons";
import { Menu } from "material-ui";
import { Icon } from "@material-ui/core";
import { connect } from 'react-redux'
import WScreenWrapper from '../w-screen-wrapper';
import { ScreenContextActions, WStore, UserContext } from '@wface/store'

//#endregion 

export interface WMainPageProps {
    classes: any,
    history?: any
}

export interface DispatchProps {
    init: (screenInfo: IMenuTreeItem) => void
    setCurrent: (screenId: string) => void
    destruct: (screenId: string) => void    
}

interface WMainPageState {    
    drawerOpen?: boolean;
    currentScreen?: IMenuTreeItem;
    openedScreens: IMenuTreeItem[];
    menuTree: IMenuTreeItem[];
}

class WMainPage extends React.Component<WMainPageProps & WStore & DispatchProps, WMainPageState> {     

    @Inject("IAuthService")
    private authService: IAuthService;

    constructor(props, context) {
        super(props, context);   

        this.state = {
            drawerOpen: true,
            currentScreen: undefined,
            openedScreens: [],
            menuTree: []
        }        
    }

    componentWillMount() {
        this.checkForAuth();

        this.authService.getMenuTree()
            .then(menuTree => {
                this.setState({menuTree}, () => {
                    let currentScreen: IMenuTreeItem;  
                    this.menuTreeForEach(this.state.menuTree, item => {
                        if(((this.props as any).match.url + this.getScreenUrl(item)) === (this.props as any).location.pathname){
                            currentScreen = item;
                            return true;
                        }
                        return false;                        
                    });

                    if(currentScreen) {
                        this.openScreen(currentScreen);
                    }
                });
            })
    }

    componentWillUpdate(nextProps) {      
        this.checkForAuth(nextProps);
    }

    checkForAuth(props = this.props){
        if(props.userContext.isLoggedIn == false) {
            props.history.replace('/login');
        }
    }

    //#endregion

    //#region Events 

    handleDrawerChange() {        
        this.setState((prevState) => { return { drawerOpen: !prevState.drawerOpen }});        
    };

    handleTabChange(event, value) {
        const item = this.findNode(value);
        if(item) {
            this.openScreen(item);
        }
        else {
            this.props.history.replace((this.props as any).match.url);
        }
    };

    handleTabCloseButtonClick(event, screen: IMenuTreeItem) {
        event.stopPropagation();
        this.closeScreen(screen);
    }

    handleTabButton(event, screen: IMenuTreeItem) {
        event.persist();
        if(event.button == 1) {
            this.closeScreen(screen);
        }
    }

    //#endregion

    //#region Methods 

    findNode(id: string): IMenuTreeItem {
        let result: IMenuTreeItem;                
        this.menuTreeForEach(this.state.menuTree, item => {
            if(item.id == id){
                result = item;
                return true;
            }
            return false;
        });

        return result;
    }

    menuTreeForEach(nodes: IMenuTreeItem[], callback: (item: IMenuTreeItem) => boolean) {
        for(let i = 0; i < nodes.length; i++) {
            const item = nodes[i];   
            if(item.subNodes && item.subNodes.length > 0){
                if(this.menuTreeForEach(item.subNodes, callback)) {
                    break;
                }
            }
            else {
                if(callback(item)) {
                    break;
                }
            }                
        }
    }
    
    openScreen(screen: IMenuTreeItem) {
        let list = this.state.openedScreens;
        if(list.findIndex(item => item.id == screen.id) == -1) {
            list.push(screen);   
            this.props.init(screen);
        }

        this.props.setCurrent(screen.id);
        this.setState({
            openedScreens: list,
            currentScreen: screen
        }, () => {                        
            this.props.history.replace((this.props as any).match.url + this.getScreenUrl(screen));
        });
    }

    closeScreen(screen: IMenuTreeItem) {
        let list = this.state.openedScreens;
        const index = list.findIndex(item => item.id == screen.id);
        if(index > -1) {
            list.splice(index, 1);
            this.props.destruct(screen.id);
        }

        let currentScreen = this.state.currentScreen;
        if(currentScreen.id == screen.id) {
            if(list.length == 0) {
                currentScreen = undefined;
            }
            else if(list.length - 1 >= index) {
                currentScreen = list[index];
            }
            else {
                currentScreen = list[index - 1];
            }
        }

        if(!currentScreen) {
            this.props.history.replace((this.props as any).match.url);
        }
        else {
            this.openScreen(currentScreen);
        }
    }

    getScreenUrl(screen: IMenuTreeItem) {
        return "/" + screen.project + "/" + screen.screen;
    }

    //#endregion

    //#region Render

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
              <WAppBar position="absolute" className={classes.appBar}>
                <WToolbar classes={{root: classes.toolBar}}>
                    <WIconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={this.handleDrawerChange.bind(this)}
                        className={classes.menuButton}
                        >
                        <MenuIcon />
                    </WIconButton>
                    <WTypography variant="title" color="inherit" noWrap className={classes.flex}>
                        WFace
                    </WTypography>
                    <MyProfileMenu />
                </WToolbar>
                <WTabs
                    value={this.state.currentScreen && this.state.currentScreen.id}
                    onChange={this.handleTabChange.bind(this)}
                    centered
                >
                    {
                        this.state.openedScreens.map(screen => {
                            const label = (
                                <WGrid container alignItems="center">
                                    <WGrid item xs={10}>
                                        {screen.text}    
                                    </WGrid>
                                    <WGrid item xs={2} style={{paddingRight: 10}} >
                                        <WIconButton 
                                            onClick={(e) => this.handleTabCloseButtonClick(e, screen)}>
                                            <Close className={classes.whiteText} style={{ fontSize: 15}}/>
                                        </WIconButton>
                                    </WGrid>
                                </WGrid>
                            );
                            return <WTab key={screen.id} 
                                         label={label} 
                                         classes={{
                                             labelContainer: classes.tabLabelContainer
                                         }}
                                         value={screen.id} 
                                         onMouseUp={e => this.handleTabButton(e, screen)} />
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
                <div style={{height:100}} />
                <NavList onItemClicked={screen => this.openScreen(screen)}/>
              </WDrawer>
              <main className={classNames(classes.content, classes[`content-left`], {
                [classes.contentShift]: this.state.drawerOpen,
                [classes[`contentShift-left`]]: this.state.drawerOpen,
                })}>
                <div style={{height:100}} />
                <div style={{padding:5}}>    
                    <Switch>
                        {
                            (() => {
                                const routeList = [];
                                // this.menuTreeForEach(this.state.menuTree, screen => {     
                                //     const screenComponent = <WScreenWrapper screenInfo={screen}/>
                                //     const route = <Route key={screen.id} path={(this.props as any).match.url + this.getScreenUrl(screen)} render={props => { return screenComponent;}}/> 

                                //     routeList.push(route);
                                //     return false;
                                // });

                                return this.state.openedScreens.map(screen => {     
                                    const screenComponent = <WScreenWrapper screenInfo={screen}/>
                                    const route = <Route key={screen.id} path={(this.props as any).match.url + this.getScreenUrl(screen)} render={props => { return screenComponent;}}/> 

                                    return route;                                    
                                });

                                // return routeList;
                            })()
                        }
                    </Switch>
                </div>
              </main>
            </div>
          );
    }

    //#endregion
};

const drawerWidth = 320;
const styles:any = theme => ({
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
    toolBar: {
        minHeight: 52,
    },
    whiteText: {
        color: '#bbb'
    }
});

const mapStateToProps = state => ({
    screenContext: state.screenContext,
    userContext: state.userContext
} as WStore);
const mapDispatchToProps = dispatch => ({
    init: (screenInfo: IMenuTreeItem) => dispatch(ScreenContextActions.init(screenInfo)),
    setCurrent: (screenId: string) => dispatch(ScreenContextActions.setCurrent(screenId)),
    destruct: (screenId: string) => dispatch(ScreenContextActions.destruct(screenId))
});

export default connect<WStore, DispatchProps, WMainPageProps>(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(WMainPage) as any) as any)