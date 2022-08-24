import { WIcon, WIconButton, WListItemIcon, WListItemText, WMenu, WMenuItem } from '@wface/components';
import { UserContextActions, WStore, AppContextActions } from '@wface/store';
import * as React from 'react';
import { connect } from 'react-redux';
import IOC, { IMenuTreeItem, MenuTreeUtil } from '@wface/ioc';
import IAppHooks from '@wface/ioc/src/interfaces/i-app-hooks';

interface MyProfileMenuState {
  userMenuAnchor?: HTMLElement
}

export interface MyProfileMenuProps {
  items: { id: string, icon?: string, text: string, onClick?: ((event: any) => void) | string }[];
}

export interface DispatchProps {
  openScreen: (menuTreeItem: IMenuTreeItem) => void;
  clearAppContext: () => void;
  logout: () => void;
}

class MyProfileMenu extends React.Component<MyProfileMenuProps & WStore & DispatchProps, MyProfileMenuState> {

  constructor(props) {
    super(props);
    this.state = {
      userMenuAnchor: null
    }

    this.logoutClicked = this.logoutClicked.bind(this)
  }

  logoutClicked() {
    this.props.logout();

    try {
      if (IOC.isBound("IAppHooks")) {
        const hooks = IOC.get<IAppHooks>("IAppHooks");
        hooks.onLogout && hooks.onLogout();
      }
    }
    catch (e) {
      console.log(e);
    }

    this.props.clearAppContext();
  }

  public render() {
    return (
      <div>
        <WIconButton
          id="btn-main-more"
          aria-owns={Boolean(this.state.userMenuAnchor) ? 'menu-appbar' : null}
          aria-haspopup="true"
          onClick={(event) => this.setState({ userMenuAnchor: event.currentTarget })}
          color="inherit"
        >
          <WIcon>more_vert</WIcon>
        </WIconButton>
        <WMenu
          id="menu-appbar"
          anchorEl={this.state.userMenuAnchor}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(this.state.userMenuAnchor)}
          onClose={() => this.setState({ userMenuAnchor: null })}
        >
          {this.props.items &&
            this.props.items.map(item => (
              <WMenuItem
                id={item.id}
                key={item.id}
                onClick={(e) => {
                  if (typeof item.onClick === 'function') {
                    item.onClick(e);
                    this.setState({ userMenuAnchor: null });
                  }
                  else {
                    const screenItem = MenuTreeUtil.findByName(this.props.appContext.menuTree, item.onClick);
                    if (!screenItem) {
                      return;
                    }

                    this.props.openScreen(screenItem);
                    this.setState({ userMenuAnchor: null });
                  }
                }}>
                {item.icon &&
                  <WListItemIcon style={{minWidth: 'auto'}}>
                    <WIcon>{item.icon}</WIcon>
                  </WListItemIcon>
                }
                <WListItemText style={{marginLeft: 12}} primary={item.text} />
              </WMenuItem>
            ))
          }
          {this.props.appContext.configuration.authRequired && 
            <WMenuItem id="menu-item-logout" key="menu-item-logout" onClick={this.logoutClicked}>
              <WListItemIcon style={{minWidth: 'auto'}}>
                <WIcon>exit_to_app</WIcon>
              </WListItemIcon >
              <WListItemText style={{marginLeft: 12}} primary="Çıkış" />
            </WMenuItem>
          }
        </WMenu>
      </div>
    )
  }
}

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch => ({
  openScreen: (menuTreeItem: IMenuTreeItem, initialValues?: any) => dispatch(AppContextActions.openScreen({ menuTreeItem, initialValues })),
  clearAppContext: () => dispatch(AppContextActions.clear()),
  logout: () => dispatch(UserContextActions.logout())
})

export default connect<WStore, DispatchProps, MyProfileMenuProps>(mapStateToProps, mapDispatchToProps)(MyProfileMenu as any);