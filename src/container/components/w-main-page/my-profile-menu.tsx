import { Box } from '@mui/material';
import React, { FC, useCallback, useState } from 'react';
import {
  MenuTreeUtil,
  WIcon, WIconButton, WListItemIcon, WListItemText, WMenu, WMenuItem
} from '../../../';
import { useAppContext, useConfiguration, useUserContext } from '../../../store';

export interface MyProfileMenuProps {
  items?: { id: string, icon?: string, text: string, onClick?: ((event: any) => void) | string }[];
}

export const MyProfileMenu: FC<MyProfileMenuProps> = ({ items }) => {
  const appContext = useAppContext();
  const userContext = useUserContext();
  const [userMenuAnchor, setUserMenuAnchor] = useState<any>(null);
  const configuration = useConfiguration();

  const logoutClicked = useCallback(() => {
    userContext.logout();

    try {
      if (configuration.hooks?.onLogout) {
        configuration.hooks?.onLogout();
      }
    }
    catch (e) {
      console.log(e);
    }

    appContext.clear();
  }, [userContext.logout, appContext.clear]);

  return (
    <Box display="flex" alignItems="center">
      {/* @ts-ignore */}
      {configuration.components?.TopbarRightItems && <configuration.components.TopbarRightItems />}
      <WIconButton
        id="btn-main-more"
        aria-owns={Boolean(userMenuAnchor) ? 'menu-appbar' : ''}
        aria-haspopup="true"
        onClick={(event) => setUserMenuAnchor(event.currentTarget)}
        color="inherit"
      >
        <WIcon>more_vert</WIcon>
      </WIconButton>
      <WMenu
        id="menu-appbar"
        anchorEl={userMenuAnchor}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(userMenuAnchor)}
        onClose={() => setUserMenuAnchor(undefined)}
      >
        {items &&
          items.map((item: any) => (
            <WMenuItem
              id={item.id}
              key={item.id}
              onClick={(e) => {
                if (typeof item.onClick === 'function') {
                  item.onClick(e);
                  setUserMenuAnchor(undefined);
                }
                else {
                  const screenItem = MenuTreeUtil.findByName(appContext.menuTree, item.onClick || '');
                  if (!screenItem) {
                    return;
                  }

                  appContext.openScreen(screenItem);
                  setUserMenuAnchor(undefined);
                }
              }}
            >
              {item.icon && (
                <WListItemIcon style={{ minWidth: "auto" }}>
                  {typeof item.icon == "string" ? (
                    <WIcon>{item.icon}</WIcon>
                  ) : (
                    <>{item.icon}</>
                  )}
                </WListItemIcon>
              )}
              <WListItemText style={{ marginLeft: 12 }} primary={item.text} />
            </WMenuItem>
          ))}
        {configuration.authRequired && (
          <WMenuItem
            id="menu-item-logout"
            key="menu-item-logout"
            onClick={logoutClicked}
          >
            <WListItemIcon style={{ minWidth: "auto" }}>
              <WIcon>exit_to_app</WIcon>
            </WListItemIcon>
            <WListItemText style={{ marginLeft: 12 }} primary="Çıkış" />
          </WMenuItem>
        )}
      </WMenu>
    </Box>
  );
};
