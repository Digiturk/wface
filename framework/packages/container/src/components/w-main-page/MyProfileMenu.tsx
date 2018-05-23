import * as React from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ExitToApp from '@material-ui/icons/ExitToApp'

import { 
    WIconButton, WIconButtonProps,
    WListItemIcon, WListItemIconProps,
    WListItemText, WListItemTextProps,
    WMenu, WMenuProps,
    WMenuItem, WMenuItemProps
} from '@wface/components';

export class MyProfileMenuState {
    userMenuAnchor?: HTMLElement
}

export default class MyProfileMenu extends React.Component<{}, MyProfileMenuState> {

    constructor(props) {
        super(props);
        this.state = {
            userMenuAnchor: null
        }
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
                    <MoreVertIcon />
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
                    onClose={() => this.setState({userMenuAnchor: null})}
                    >
                    <WMenuItem>
                        <WListItemIcon>
                            <AccountCircle />
                        </WListItemIcon>
                        <WListItemText inset primary="Profilim" />
                    </WMenuItem>
                    <WMenuItem>
                        <WListItemIcon>
                            <ExitToApp />
                        </WListItemIcon>
                        <WListItemText inset primary="Çıkış" />
                    </WMenuItem>
                </WMenu>
            </div>
        )
    }
}