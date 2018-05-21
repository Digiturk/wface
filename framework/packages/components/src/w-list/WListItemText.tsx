import * as React from 'react';
import { ListItemText } from '@material-ui/core';
import { ListItemTextProps } from '@material-ui/core/ListItemText';

export interface WListItemTextProps extends ListItemTextProps {}

export class WListItemText extends React.Component<WListItemTextProps, {}> {
    public render() {
        return <ListItemText {...this.props} />;
    }
}