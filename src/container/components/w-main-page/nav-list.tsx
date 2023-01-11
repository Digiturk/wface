import * as React from 'react'
import withStyles from '@mui/styles/withStyles';
import withTheme from '@mui/styles/withTheme';
import Collapse from '@mui/material/Collapse';
import {
  IMenuTreeItem, MenuTreeUtil,
  WDivider, WList, WListItem,
  WListItemIcon, WListItemText,
  WCircularProgress, WTypography, WIconButton, WIcon, WTheme, WStore
} from '../../../';
import { connect } from 'react-redux';
import { SxProps } from '@mui/material';

export interface NavListProps {
  menuTree: IMenuTreeItem[];
  onItemClicked?: (item: IMenuTreeItem) => void;
  theme?: WTheme;
  classes?: any;
}

export interface DrawerMenuItemProps {
  sx?: SxProps;
  style?: React.CSSProperties;
  activeStyle?: React.CSSProperties;
}

interface NavListState {
  expandedItems: string[],
}

class NavList extends React.Component<NavListProps & WStore, NavListState> {

  constructor(props: NavListProps & WStore) {
    super(props);

    this.state = {
      expandedItems: []
    }
  }

  handleNodeClick = (id: string) => {
    this.setState(prev => {
      const list = prev.expandedItems;
      const index = list.indexOf(id);
      if (index > -1) {
        list.splice(index, 1);
      }
      else {
        list.push(id);
      }

      return { expandedItems: list };
    });
  };

  handleLeafClick = (item: IMenuTreeItem) => {
    if (this.props.onItemClicked) {
      this.props.onItemClicked(item);
    }
  }

  renderNavItem(item: IMenuTreeItem, hasAnyIcon: boolean, nestingLevel: number = 0): React.ReactNode {
    if (item.hideOnNavigationList) {
      return null;
    }

    const itemStyle = {
      paddingLeft: 10 + 20 * nestingLevel,
    }

    if (item.subNodes && item.subNodes.length > 0) {
      const open = this.state.expandedItems.indexOf(item.id) > -1;
      return (
        <div key={item.id}>
          {item.divideBefore && <WDivider />}
          <WListItem key={item.id} id={"menu-item-" + item.id} onClick={() => { this.handleNodeClick(item.id) }} style={itemStyle} classes={{ root: this.props.classes.listItemRoot }}>
            {hasAnyIcon &&
              <WListItemIcon className={this.props.classes.listItemIconRoot}>
                <WIcon>{item.icon}</WIcon>
              </WListItemIcon>
            }
            <WListItemText primary={item.text} />
            <WIcon>{open ? "expand_less" : "expand_more"}</WIcon>
          </WListItem>
          <Collapse in={open} timeout="auto">
            <WList id={"sub-menu-" + item.id} disablePadding>
              {item.subNodes.map(subItem => { return this.renderNavItem(subItem, hasAnyIcon, nestingLevel + 1); })}
            </WList>
          </Collapse>

        </div>
      );
    }
    else {

      let listItemTextStyle = { ...this.props.theme?.designDetails?.drawerDesign?.menuItem?.style };
      let listItemStyle = Object.assign({}, itemStyle) as any;

      if (this.props.appContext.currentScreen && this.props.appContext.currentScreen.menuTreeItem.id === item.id) {
        listItemTextStyle = {
          color: this.props.theme?.designDetails?.drawerDesign?.menuItem?.activeStyle?.color || this.props.theme?.palette.primary.main,
          fontWeight: this.props.theme?.designDetails?.drawerDesign?.menuItem?.activeStyle?.fontWeight || 500,
        };

        listItemStyle = {
          backgroundColor: this.props.theme?.palette.background.default,
          ...listItemStyle,
          ...this.props.theme?.designDetails?.drawerDesign?.menuItem?.activeStyle,
        };
      }

      return (
        <WListItem
          key={item.id}
          id={"menu-item-" + item.id}
          classes={{ root: this.props.classes.listItemRoot }}
          style={listItemStyle}
          sx={this.props.theme?.designDetails?.drawerDesign?.menuItem?.sx}
          onClick={() => { this.handleLeafClick(item) }}
          divider
        >
          {hasAnyIcon &&
            <WListItemIcon className={this.props.classes.listItemIconRoot}>
              <WIcon style={listItemTextStyle}>{item.icon}</WIcon>
            </WListItemIcon>
          }
          <WListItemText primary={<div style={listItemTextStyle as any}>{item.text}</div>} />
        </WListItem>
      );
    }
  }

  public render() {
    let hasAnyIcon = false;
    MenuTreeUtil.menuTreeForEach(this.props.menuTree, item => {
      if (item.icon) {
        hasAnyIcon = true;
        return true;
      }
      return false;
    });

    if (this.props.menuTree && this.props.menuTree.length > 0) {
      return (
        <div style={{ paddingLeft: 5 }}>
          <WList
            id="list-menu-tree"
            key="NavListKey"
          >
            {this.props.menuTree &&
              this.props.menuTree.map((item: any) => {
                return this.renderNavItem(item, hasAnyIcon);
              })
            }
          </WList>
        </div>
      );
    }
    else {
      const centerStyle = {
        textAlign: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 50
      } as any;
      return <div style={centerStyle}> <WCircularProgress size={50} /> </div>;
    }
  }
}

const styles = (theme: WTheme) => ({
  listItemIconRoot: {
    marginRight: 6,
    minWidth: '24px !important'
  },
  listItemRoot: {
    borderRadius: '4px 0px 0px 4px',
    borderBottomColor: theme.palette.background.paper + ' !important',
    '&:hover': {
      backgroundColor: theme.palette.background.default + ' !important'
    }
  }
});

const mapStateToProps = (state: WStore) => ({
  appContext: state.appContext,
  userContext: state.userContext,
} as WStore);

const mapDispatchToProps = (dispatch: any) => ({
});

export default connect<WStore, {}, NavListProps>(mapStateToProps as any, mapDispatchToProps)(withTheme(withStyles(styles as any)(NavList) as any) as any)