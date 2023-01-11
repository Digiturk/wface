import * as React from 'react';
import { connect } from 'react-redux';
import {
  IOC, IMenuTreeItem, MenuTreeUtil, IAppHooks,
  UserContextActions, WStore, AppContextActions,
  WIcon, WIconButton, WListItemIcon, WListItemText, WMenu, WMenuItem
} from '../../../';

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

  constructor(props: MyProfileMenuProps & WStore & DispatchProps) {
    super(props);
    this.state = {
      userMenuAnchor: undefined
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
          aria-owns={Boolean(this.state.userMenuAnchor) ? 'menu-appbar' : ''}
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
          onClose={() => this.setState({ userMenuAnchor: undefined })}
        >
          {this.props.items &&
            this.props.items.map((item: any) => (
              <WMenuItem
                id={item.id}
                key={item.id}
                onClick={(e) => {
                  if (typeof item.onClick === 'function') {
                    item.onClick(e);
                    this.setState({ userMenuAnchor: undefined });
                  }
                  else {
                    const screenItem = MenuTreeUtil.findByName(this.props.appContext.menuTree, item.onClick || '');
                    if (!screenItem) {
                      return;
                    }

                    this.props.openScreen(screenItem);
                    this.setState({ userMenuAnchor: undefined });
                  }
                }}>
                {item.icon &&
                  <WListItemIcon style={{ minWidth: 'auto' }}>
                    <WIcon>{item.icon}</WIcon>
                  </WListItemIcon>
                }
                <WListItemText style={{ marginLeft: 12 }} primary={item.text} />
              </WMenuItem>
            ))
          }
          {this.props.appContext.configuration.authRequired &&
            <WMenuItem id="menu-item-logout" key="menu-item-logout" onClick={this.logoutClicked}>
              <WListItemIcon style={{ minWidth: 'auto' }}>
                <WIcon>exit_to_app</WIcon>
              </WListItemIcon >
              <WListItemText style={{ marginLeft: 12 }} primary="Çıkış" />
            </WMenuItem>
          }
        </WMenu>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({ ...state });
const mapDispatchToProps = (dispatch: any) => ({
  openScreen: (menuTreeItem: IMenuTreeItem, initialValues?: any) => dispatch(AppContextActions.openScreen({ menuTreeItem, initialValues })),
  clearAppContext: () => dispatch(AppContextActions.clear()),
  logout: () => dispatch(UserContextActions.logout())
})

export default connect<WStore, DispatchProps, MyProfileMenuProps>(mapStateToProps, mapDispatchToProps)(MyProfileMenu as any);