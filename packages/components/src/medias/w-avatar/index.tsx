import * as React from 'react';
import Avatar, { AvatarProps } from '@mui/material/Avatar';

export interface WAvatarProps extends AvatarProps { }

export class WAvatar extends React.Component<WAvatarProps, {}> {
  public render() {
    return <Avatar {...this.props} />
  }
}