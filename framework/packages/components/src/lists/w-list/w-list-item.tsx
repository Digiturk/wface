import * as React from 'react';
import { ListItem } from '@material-ui/core';
import { ListItemProps } from '@material-ui/core/ListItem';

export interface WListItemProps extends ListItemProps {}

export class WListItem extends React.Component<WListItemProps, {}> {
    public render() {
        return <ListItem {...this.props} />;
    }
}