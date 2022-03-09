import * as React from 'react';
import { ListItemIcon } from '@mui/material';
import { ListItemIconProps } from '@mui/material/ListItemIcon';

export interface WListItemIconProps extends ListItemIconProps { }

export class WListItemIcon extends React.Component<WListItemIconProps, {}> {
  public render() {
    return <ListItemIcon {...this.props} />;
  }
}