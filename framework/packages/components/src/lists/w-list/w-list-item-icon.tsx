import * as React from 'react';
import { ListItemIcon } from '@material-ui/core';
import { ListItemIconProps } from '@material-ui/core/ListItemIcon';

export interface WListItemIconProps extends ListItemIconProps { }

export class WListItemIcon extends React.Component<WListItemIconProps, {}> {
  public render() {
    return <ListItemIcon {...this.props} />;
  }
}