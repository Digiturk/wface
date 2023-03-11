import React, { FC, useCallback, useMemo, useState } from 'react'
import Collapse from '@mui/material/Collapse';
import {
  IMenuTreeItem, MenuTreeUtil,
  WDivider, WList, WListItem,
  WListItemIcon, WListItemText,
  WCircularProgress, WIcon, WTheme
} from '../../../';
import { SxProps, useTheme } from '@mui/material';
import { useAppContext } from '../../../store';
import makeStyles from "@mui/styles/makeStyles";

export interface NavListProps {
  onItemClicked?: (item: IMenuTreeItem) => void;
}


const useStyles = makeStyles((theme: any) => ({
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
}));

export interface DrawerMenuItemProps {
  sx?: SxProps;
  style?: React.CSSProperties;
  activeStyle?: React.CSSProperties;
}

const NavList: FC<NavListProps> = ({ onItemClicked }) => {
  const classes = useStyles();
  const appContext = useAppContext(); 
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const theme = useTheme<WTheme>();

  const hasAnyIcon = useMemo(() => {
    let result = false;
    MenuTreeUtil.menuTreeForEach(appContext.menuTree, item => {
      if (item.icon) {
        result = true;
        return true;
      }
      return false;
    });

    return result;
  }, [appContext.menuTree]);

  const handleNodeClick = useCallback((id: string) => {
    setExpandedItems(prevExpandedItems => {
      const index = prevExpandedItems.indexOf(id);
      if (index > -1) {
        prevExpandedItems.splice(index, 1);
      }
      else {
        prevExpandedItems.push(id);
      }

      return prevExpandedItems;
    });
  }, []);

  const handleLeafClick = useCallback((item: IMenuTreeItem) => {
    if (onItemClicked) {
      onItemClicked(item);
    }
  }, [onItemClicked]);

  const renderNavItem = useCallback((item: IMenuTreeItem, hasAnyIcon: boolean, nestingLevel: number = 0): React.ReactNode => {
    if (item.hideOnNavigationList) {
      return null;
    }

    const itemStyle = {
      paddingLeft: 10 + 20 * nestingLevel,
    }

    if (item.subNodes && item.subNodes.length > 0) {
      const open = expandedItems.indexOf(item.id) > -1;
      return (
        <div key={item.id}>
          {item.divideBefore && <WDivider />}
          <WListItem key={item.id} id={"menu-item-" + item.id} onClick={() => { handleNodeClick(item.id) }} style={itemStyle} classes={{ root: classes.listItemRoot }}>
            {hasAnyIcon &&
              <WListItemIcon className={classes.listItemIconRoot}>
                <WIcon>{item.icon}</WIcon>
              </WListItemIcon>
            }
            <WListItemText primary={item.text} />
            <WIcon>{open ? "expand_less" : "expand_more"}</WIcon>
          </WListItem>
          <Collapse in={open} timeout="auto">
            <WList id={"sub-menu-" + item.id} disablePadding>
              {item.subNodes.map(subItem => { return renderNavItem(subItem, hasAnyIcon, nestingLevel + 1); })}
            </WList>
          </Collapse>

        </div>
      );
    }
    else {

      let listItemTextStyle = { ...theme?.designDetails?.drawerDesign?.menuItem?.style };
      let listItemStyle = Object.assign({}, itemStyle) as any;

      if (appContext.currentScreen && appContext.currentScreen.menuTreeItem.id === item.id) {
        listItemTextStyle = {
          color: theme?.designDetails?.drawerDesign?.menuItem?.activeStyle?.color || theme?.palette.primary.main,
          fontWeight: theme?.designDetails?.drawerDesign?.menuItem?.activeStyle?.fontWeight || 500,
        };

        listItemStyle = {
          backgroundColor: theme?.palette.background.default,
          ...listItemStyle,
          ...theme?.designDetails?.drawerDesign?.menuItem?.activeStyle,
        };
      }

      return (
        <WListItem
          key={item.id}
          id={"menu-item-" + item.id}
          classes={{ root: classes.listItemRoot }}
          style={listItemStyle}
          sx={theme?.designDetails?.drawerDesign?.menuItem?.sx}
          onClick={() => { handleLeafClick(item) }}
          divider
        >
          {hasAnyIcon &&
            <WListItemIcon className={classes.listItemIconRoot}>
              <WIcon style={listItemTextStyle}>{item.icon}</WIcon>
            </WListItemIcon>
          }
          <WListItemText primary={<div style={listItemTextStyle as any}>{item.text}</div>} />
        </WListItem>
      );
    }
  }, [expandedItems, handleNodeClick, handleNodeClick, appContext.currentScreen]);


  if (appContext.menuTree && appContext.menuTree.length > 0) {
    return (
      <div style={{ paddingLeft: 5 }}>
        <WList
          id="list-menu-tree"
          key="NavListKey"
        >
            {appContext.menuTree.map((item: any) => renderNavItem(item, hasAnyIcon))}
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
};

export default NavList;