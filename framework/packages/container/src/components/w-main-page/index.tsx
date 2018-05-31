//#region imports 

import * as React from "react";
import { withRouter, BrowserRouter, Route, Switch, Link } from 'react-router-dom'
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
import { IAuthService, IMenuTree, UserContext, WStore } from "@wface/ioc";
import WMuiThemeProvider from "../w-container/WMuiThemeProvider";
import { Close } from "@material-ui/icons";
import { Menu } from "material-ui";
import { Icon } from "@material-ui/core";
import { connect } from 'react-redux'

//#endregion 

export interface WMainPageProps extends WStore{
    classes: any,
    history?: any
}
interface WMainPageState {    
    drawerOpen?: boolean;
    currentPage?: IMenuTree;
    openedPages: IMenuTree[];
    menuTree: IMenuTree[];
}

class WMainPage extends React.Component<WMainPageProps, WMainPageState> {     

    @Inject("IAuthService")
    private authService: IAuthService;

    constructor(props, context) {
        super(props, context);   

        this.state = {
            drawerOpen: true,
            currentPage: undefined,
            openedPages: [],
            menuTree: []
        }        
    }

    componentWillMount() {
        this.authService.getMenuTree()
            .then(menuTree => {
                this.setState({menuTree}, () => {
                    let currentPage: IMenuTree;                
                    this.menuTreeForEach(this.state.menuTree, item => {
                        if(item.target === (this.props as any).location.pathname){
                            currentPage = item;
                            return true;
                        }
                        return false;
                    });
                    if(currentPage) {
                        this.openPage(currentPage);
                    }
                });
            })
    }

    componentWillUpdate(nextProps) {            
        if(nextProps.userContext.isLoggedIn == false) {
            nextProps.history.replace('/login');
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
            this.openPage(item);
        }
        else {
            this.props.history.replace((this.props as any).match.url);
        }
    };

    handleTabCloseButtonClick(event, page: IMenuTree) {
        event.stopPropagation();
        this.closePage(page);
    }

    handleTabButton(event, page: IMenuTree) {
        event.persist();
        if(event.button == 1) {
            this.closePage(page);
        }
    }

    //#endregion

    //#region Methods 

    findNode(id: string): IMenuTree {
        let result: IMenuTree;                
        this.menuTreeForEach(this.state.menuTree, item => {
            if(item.id == id){
                result = item;
                return true;
            }
            return false;
        });

        return result;
    }

    menuTreeForEach(nodes: IMenuTree[], callback: (item: IMenuTree) => boolean) {
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
    
    openPage(page: IMenuTree) {
        let list = this.state.openedPages;
        if(list.findIndex(item => item.id == page.id) == -1) {
            list.push(page);
        }

        this.setState({
            openedPages: list,
            currentPage: page
        }, () => {
            this.props.history.replace((this.props as any).match.url + page.target);
        });
    }

    closePage(page: IMenuTree) {
        let list = this.state.openedPages;
        const index = list.findIndex(item => item.id == page.id);
        if(index > -1) {
            list.splice(index, 1);
        }

        let currentPage = this.state.currentPage;
        if(currentPage.id == page.id) {
            if(list.length == 0) {
                currentPage = undefined;
            }
            else if(list.length - 1 >= index) {
                currentPage = list[index];
            }
            else {
                currentPage = list[index - 1];
            }
        }

        this.setState({
            openedPages: list,
            currentPage: currentPage
        }, () => {
            if(!currentPage) {
                this.props.history.replace((this.props as any).match.url);
            }
            else {
                this.props.history.replace((this.props as any).match.url + currentPage.target);
            }
        });
    }

    //#endregion

    //#region Render

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
              <WAppBar position="absolute" className={classes.appBar}>
                <WToolbar>
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
                    value={this.state.currentPage && this.state.currentPage.id}
                    onChange={this.handleTabChange.bind(this)}
                    centered
                >
                    {
                        this.state.openedPages.map(page => {
                            const label = (
                                <WGrid container alignItems="center">
                                    <WGrid item xs={10}>
                                        {page.text}    
                                    </WGrid>
                                    <WGrid item xs={2} style={{paddingRight: 10}} >
                                        <WIconButton 
                                            onClick={(e) => this.handleTabCloseButtonClick(e, page)}>
                                            <Close className={classes.whiteText} style={{ fontSize: 15}}/>
                                        </WIconButton>
                                    </WGrid>
                                </WGrid>
                            );
                            return <WTab label={label} value={page.id} onMouseUp={e => this.handleTabButton(e, page)}/>
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
                <div className={classes.toolbar} />
                <div style={{height:48}} />
                <NavList onItemClicked={item => this.openPage(item)}/>
              </WDrawer>
              <main className={classNames(classes.content, classes[`content-left`], {
                [classes.contentShift]: this.state.drawerOpen,
                [classes[`contentShift-left`]]: this.state.drawerOpen,
                })}>
                <div className={classes.toolbar} />
                <div style={{height:48}} />
                <div style={{padding:10}}>    
                    <Switch>
                        {
                            (() => {
                                const routeList = [];
                                this.menuTreeForEach(this.state.menuTree, item => {
                                    const Component = function(props) {                                    
                                        return (
                                            <div> 
                                                {item.text} 
                                            </div>
                                        );
                                    }
    
                                    const route = <Route exact path={this.props.history.location.pathname + item.target} render={props => { return <Component/>}}/> 

                                    routeList.push(route);
                                    return false;
                                });

                                return routeList;
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
      zIndex: theme.zIndex.drawer + 1,
    },
    drawerPaper: {
      position: 'relative',
      width: drawerWidth,
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
    toolbar: theme.mixins.toolbar,
    whiteText: {
        color: '#bbb'
    }
});


// export default connect(mapStateToProps)(withRouter(withStyles(styles)(WMainPage))
export default connect(state => ( {...state}))(withRouter(withStyles(styles)(WMainPage)))