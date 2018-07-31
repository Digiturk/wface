import * as React from 'react';
import Avatar, { AvatarProps } from '@material-ui/core/Avatar';

export interface WAvatarProps extends AvatarProps {}

export class WAvatar extends React.Component<WAvatarProps, {}> {
    public render() {
        return <Avatar {...this.props} />
    }
}