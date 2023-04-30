import React, { FC, useCallback, useMemo, useState } from 'react'
import Collapse from '@mui/material/Collapse';
import {
  IMenuTreeItem, MenuTreeUtil,
  WDivider, WList, WListItem,
  WListItemIcon, WListItemText,
  WCircularProgress, WIcon, WTheme,
  WListItemButton,
  WIconButton
} from '../../../';
import { useAppContext } from '../../../store';
import { Box, SxProps, useTheme } from '@mui/material';
import makeStyles from "@mui/styles/makeStyles";
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

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
  const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({});
  const theme = useTheme<WTheme>();
  const { pathname } = useLocation();

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

  const currentItem = useMemo<IMenuTreeItem | undefined>(() => {
    let result: IMenuTreeItem | undefined = undefined;
    MenuTreeUtil.menuTreeForEach(appContext.menuTree, item => {
      if (pathname === '/main/' + item.id) {
        result = item;
        return true;
      }
      return false;
    });

    return result;
  }, [appContext.menuTree, pathname]);

  const handleNodeClick = useCallback((id: string) => {
    setExpandedItems(prevExpandedItems => ({ ...prevExpandedItems, [id]: prevExpandedItems[id] = !prevExpandedItems[id] }))
  }, []);

  const renderNavItem = useCallback((item: IMenuTreeItem, hasAnyIcon: boolean, nestingLevel: number = 0): React.ReactNode => {
    if (item.hideOnNavigationList) {
      return null;
    }

    const itemStyle = {
      paddingLeft: 10 + 20 * nestingLevel,
    }

    const open = expandedItems[item.id];


    let listItemTextStyle = { ...theme?.designDetails?.drawerDesign?.menuItem?.style };
    let listItemStyle = Object.assign({ cursor: 'pointer' }, itemStyle) as any;

    if (currentItem?.id === item.id) {
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
      <div key={item.id}>
        <WListItemButton
          id={"menu-item-" + item.id}
          classes={{ root: classes.listItemRoot }}
          style={listItemStyle}
          sx={theme?.designDetails?.drawerDesign?.menuItem?.sx}
          onClick={() => {
            if (!item.screen) {
              handleNodeClick(item.id);
            }
          }}
          // @ts-ignore
          component={item.screen ? Link : undefined}
          to={item.screen ? item.id : undefined}
        >
          {hasAnyIcon &&
            <WListItemIcon className={classes.listItemIconRoot}>
              <WIcon style={listItemTextStyle}>{item.icon}</WIcon>
            </WListItemIcon>
          }
          <WListItemText
            primary={(
              <Box style={listItemTextStyle as any} display="flex" alignItems="center" justifyContent="space-between">
                <span>{item.text}</span>
                {item.screen && item.subNodes && item.subNodes.length > 0 && <Box sx={{ color: theme => theme.palette.text.disabled }}>|</Box>}
              </Box>
            )}
          />
          {item.subNodes && item.subNodes.length > 0 && (
            item.screen
              ? (<WIconButton
                size="small"
                sx={{ p: 0 }}
                onClick={(e) => {
                  // e.stopPropagation();
                  e.preventDefault();
                  handleNodeClick(item.id);
                }}
              >
                <WIcon>{open ? "expand_less" : "expand_more"}</WIcon>
              </WIconButton>
              )
              : (
                <WIcon>{open ? "expand_less" : "expand_more"}</WIcon>
              )
          )}
        </WListItemButton>
        {item.subNodes && item.subNodes.length > 0 && (
          <Collapse in={open} timeout="auto">
            <WList id={"sub-menu-" + item.id} disablePadding>
              {item.subNodes.map(subItem => { return renderNavItem(subItem, hasAnyIcon, nestingLevel + 1); })}
            </WList>
          </Collapse>
        )}
      </div>
    );

  }, [expandedItems, handleNodeClick, handleNodeClick, currentItem]);


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
    return <div style={centerStyle}><WCircularProgress size={50} /> </div>;
  }
};

export default NavList;