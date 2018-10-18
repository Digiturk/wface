import { WIcon, WIconButton, WListItemIcon, WListItemText, WMenu, WMenuItem } from '@wface/components';
import { UserContextActions, WStore } from '@wface/store';
import * as React from 'react';
import { connect } from 'react-redux';

export interface MyProfileMenuState {
  userMenuAnchor?: HTMLElement
}

type MyProfileMenuProps = WStore & {
  logout
}

class MyProfileMenu extends React.Component<MyProfileMenuProps, MyProfileMenuState> {

  constructor(props) {
    super(props);
    this.state = {
      userMenuAnchor: null
    }

    this.logoutClicked = this.logoutClicked.bind(this)
  }

  logoutClicked() {
    this.props.logout();
  }

  public render() {
    return (
      <div>
        <WIconButton
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
          <WMenuItem>
            <WListItemIcon>
              <WIcon>account_circle</WIcon>
            </WListItemIcon>
            <WListItemText inset primary="Profilim" />
          </WMenuItem>
          <WMenuItem onClick={this.logoutClicked}>
            <WListItemIcon>
              <WIcon>exit_to_app</WIcon>
            </WListItemIcon>
            <WListItemText inset primary="Çıkış" />
          </WMenuItem>
        </WMenu>
      </div>
    )
  }
}

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch => ({ logout: () => dispatch(UserContextActions.logout()) })

export default connect(mapStateToProps, mapDispatchToProps)(MyProfileMenu)