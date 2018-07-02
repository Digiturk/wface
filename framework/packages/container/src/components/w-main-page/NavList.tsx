import * as React from 'react'
import {
    WDivider, WList, WListItem,
    WListItemIcon, WListItemText, 
    WCircularProgress, WTypography, WIconButton, WIcon,
} from '@wface/components';
import { withStyles } from '@material-ui/core/styles';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Cached from '@material-ui/icons/Cached';
import Collapse from '@material-ui/core/Collapse';
import { IAuthService, IMenuTreeItem } from '@wface/ioc';
import { Inject } from 'react.di';

export interface NavListProps {
    onItemClicked?: (item: IMenuTreeItem) => void
}

interface NavListState {
    treeData: IMenuTreeItem[],
    expandedItems: string[],   
    menuLoadError: boolean 
}

class NavList extends React.Component<NavListProps & {classes: any}, NavListState> {
    @Inject("IAuthService")
    private authService: IAuthService

    constructor(props) {
        super(props);

        this.state = {
            treeData: undefined,
            expandedItems: [],
            menuLoadError: false
        }
    }

    componentDidMount() {
        this.loadMenuTree();
    }

    loadMenuTree() {
        this.setState({menuLoadError: false}, () => {
            if(!this.state.treeData || this.state.treeData.length == 0) {
                this.authService.getMenuTree()
                    .then(treeData => { 
                        this.setState({treeData}) 
                    })
                    .catch(error => {
                        this.setState({menuLoadError: true});
                    })
            }
        });
    }

    handleNodeClick = (id: string) => {
        this.setState(prev => { 
            const list = prev.expandedItems;
            const index = list.indexOf(id);
            if(index > -1) {
                list.splice(index, 1);
            }
            else {
                list.push(id);
            }

            return { expandedItems: list };
        });
    };

    handleLeafClick = (item: IMenuTreeItem) => {
        if(this.props.onItemClicked) {
            this.props.onItemClicked(item);
        }
    }

    renderNavItem(item: IMenuTreeItem, nestingLevel: number = 0): React.ReactNode {
        const itemStyle = {
            paddingLeft: 20 + 20 * nestingLevel
        }

        if(item.subNodes && item.subNodes.length > 0) {
            const open = this.state.expandedItems.indexOf(item.id) > -1;
            return (
                <div key={item.id}>
                    {item.divideBefore && <WDivider/>}
                    <WListItem key={item.id} button onClick={() => { this.handleNodeClick(item.id)}} style={itemStyle}>
                        <WListItemIcon>
                            <WIcon>{item.icon}</WIcon>
                        </WListItemIcon>
                        <WListItemText inset primary={item.text} />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </WListItem>     
                    <Collapse in={open} timeout="auto">
                        <WList component="div" disablePadding>
                            { item.subNodes.map(subItem => { return this.renderNavItem(subItem, nestingLevel + 1); }) }
                        </WList>
                    </Collapse>           
                    
                </div>
            );
        }
        else {
            return (
                <WListItem key={item.id} button style={itemStyle} onClick={() => { this.handleLeafClick(item)}} >
                    <WListItemIcon>
                        <WIcon>{item.icon}</WIcon>
                    </WListItemIcon>
                    <WListItemText inset primary={item.text} />
                </WListItem>
            );
        }
    }
    
    public render() {
        const { classes } = this.props;
        const centerStyle= {
            textAlign:'center', 
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 50
        } as any;

        let content = <div style={centerStyle}> <WCircularProgress size={50}/> </div>;
        if(this.state.menuLoadError) {
            content = (
                <div style={centerStyle}>
                    <WTypography variant="caption" gutterBottom align="center">
                        Menü bilgileriniz yüklenirken bir hata oluştu.
                    </WTypography>
                    <WIconButton onClick={() => this.loadMenuTree() }>
                        <Cached/>
                    </WIconButton>
                </div>
            )
        }
        else if(this.state.treeData) {
            content = (
                <WList key="NavListKey"
                    component="nav">
                    {this.state.treeData &&
                        this.state.treeData.map(item => {
                            return this.renderNavItem(item);
                        })
                    }                    
                </WList>
            );
        }

        return <div className={classes.root}>{content}</div>;
    }
}

const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 320,
      backgroundColor: theme.palette.background.paper,
    }
});

export default withStyles(styles)(NavList)