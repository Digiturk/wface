//#region imports 

import * as React from "react";
import { withRouter } from 'react-router-dom'
import * as classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { 
    WAppBar, WAppBarProps,
    WDivider, WDividerProps,
    WDrawer, WDrawerProps,
    WIconButton, WIconButtonProps,
    WList, WListProps,
    WListItem, WListItemProps,
    WListItemIcon, WListItemIconProps,
    WListItemText, WListItemTextProps,
    WTabs, WTabsProps,
    WTab, WTabProps,
    WToolbar, WToolbarProps,
    WTypography, WTypographyProps
} from '@wface/components';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import MenuIcon from '@material-ui/icons/Menu';

import { injectable, inject } from "inversify";

//#endregion 

export interface WMainPageProps {
    classes: any,
    history?: any
}
interface WMainPageState {
    drawerOpen?: boolean,
    currentTabIndex?: number
}

class WMainPage extends React.Component<WMainPageProps, WMainPageState> {     
    constructor(props) {
        super(props);             

        this.state = {
            drawerOpen: true,
            currentTabIndex: 0
        }        
    }

    componentWillMount() {
        // TODO injection calismadigi icin burasi daha sonra kontrol edilmeli. 
        // Gerekiyorsa yapı tamamen değişmeli. 
        // if(this.authProvider.isLoggedIn == false) {
        //     this.props.history.replace('/login');
        // }
    }

    handleDrawerChange() {        
        this.setState((prevState) => { return { drawerOpen: !prevState.drawerOpen }});        
    };

    handleTabChange(event, value) {
        this.setState({ currentTabIndex: value });
    };

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
                    <WTypography variant="title" color="inherit" noWrap>
                        WFace Container
                    </WTypography>
                </WToolbar>
                <WTabs
                    value={this.state.currentTabIndex}
                    onChange={this.handleTabChange.bind(this)}
                    centered
                >
                    <WTab label="Grid Screen" />
                    <WTab label="Edit Screen" />
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
                <WList> 
                    <div>
                        <WListItem button>
                            <WListItemIcon>
                                <InboxIcon />
                            </WListItemIcon>
                            <WListItemText primary="Inbox" />
                        </WListItem>
                    </div>
                </WList>
                <WDivider />
                <WList>
                    <div>
                        <WListItem button>
                            <WListItemIcon>
                                <InboxIcon />
                            </WListItemIcon>
                            <WListItemText primary="Inbox" />
                        </WListItem>
                    </div>
                </WList>
              </WDrawer>
              <main className={classNames(classes.content, classes[`content-left`], {
                [classes.contentShift]: this.state.drawerOpen,
                [classes[`contentShift-left`]]: this.state.drawerOpen,
                })}>
                <div className={classes.toolbar} />
                <div style={{height:48}} />
                <div style={{padding:10}}>                
                    <WTypography noWrap>{'You think water moves fast? You should see ice.'}</WTypography>
                </div>
              </main>
            </div>
          );
    }
};

const drawerWidth = 240;
const styles:any = theme => ({
    root: {
      flexGrow: 1,
      height: '%100',
      zIndex: 1,
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
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
    toolbar: theme.mixins.toolbar
  });

export default withRouter(withStyles(styles)(WMainPage))