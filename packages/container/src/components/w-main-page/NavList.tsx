import * as React from 'react'
import {
  WDivider, WList, WListItem,
  WListItemIcon, WListItemText,
  WCircularProgress, WTypography, WIconButton, WIcon,
} from '@wface/components';
import { withStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import { IMenuTreeItem } from '@wface/ioc';

export interface NavListProps {
  menuTree: IMenuTreeItem[];
  onItemClicked?: (item: IMenuTreeItem) => void
}

interface NavListState {
  expandedItems: string[],
}

class NavList extends React.Component<NavListProps & { classes: any }, NavListState> {

  constructor(props) {
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

  renderNavItem(item: IMenuTreeItem, nestingLevel: number = 0): React.ReactNode {
    if(item.hideOnNavigationList) {
      return null;
    }

    const itemStyle = {
      paddingLeft: 20 + 20 * nestingLevel
    }

    if (item.subNodes && item.subNodes.length > 0) {
      const open = this.state.expandedItems.indexOf(item.id) > -1;
      return (
        <div key={item.id}>
          {item.divideBefore && <WDivider />}
          <WListItem key={item.id} button onClick={() => { this.handleNodeClick(item.id) }} style={itemStyle}>
            <WListItemIcon>
              <WIcon>{item.icon}</WIcon>
            </WListItemIcon>
            <WListItemText inset primary={item.text} />
            <WIcon>{open ? "expand_less" : "expand_more"}</WIcon>
          </WListItem>
          <Collapse in={open} timeout="auto">
            <WList disablePadding>
              {item.subNodes.map(subItem => { return this.renderNavItem(subItem, nestingLevel + 1); })}
            </WList>
          </Collapse>

        </div>
      );
    }
    else {
      return (
        <WListItem key={item.id} button style={itemStyle} onClick={() => { this.handleLeafClick(item) }} >
          <WListItemIcon>
            <WIcon>{item.icon}</WIcon>
          </WListItemIcon>
          <WListItemText inset primary={item.text} />
        </WListItem>
      );
    }
  }

  public render() {
    if (this.props.menuTree && this.props.menuTree.length > 0) {
      return (
        <WList key="NavListKey"
          component="nav">
          {this.props.menuTree &&
            this.props.menuTree.map(item => {
              return this.renderNavItem(item);
            })
          }
        </WList>
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

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 320,
    backgroundColor: theme.palette.background.paper,
  }
});

export default withStyles(styles)(NavList)