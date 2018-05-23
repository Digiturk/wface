import * as React from 'react'
import {
    WDivider, WDividerProps,
    WList, WListProps,
    WListItem, WListItemProps,
    WListItemIcon, WListItemIconProps,
    WListItemText, WListItemTextProps,
} from '@wface/components'
import InboxIcon from '@material-ui/icons/MoveToInbox';

export default class NavList extends React.Component<{}, {}> {
    public render() {
        return (
            <div>
                <WList> 
                    <div>
                        <WListItem button>
                            <WListItemIcon>
                                <InboxIcon />
                            </WListItemIcon>
                            <WListItemText primary="Inbox" />
                        </WListItem>
                    </div>
                </WList>
                <WDivider />
                <WList>
                    <div>
                        <WListItem button>
                            <WListItemIcon>
                                <InboxIcon />
                            </WListItemIcon>
                            <WListItemText primary="Inbox" />
                        </WListItem>
                    </div>
                </WList>
            </div>
        );
    }
}