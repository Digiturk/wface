import * as React from 'react';
import { Drawer } from '@mui/material';
import { DrawerProps } from '@mui/material/Drawer';

export interface WDrawerProps extends DrawerProps { }

export class WDrawer extends React.Component<WDrawerProps, {}> {
  public render() {
    return <Drawer {...this.props} />
  }
}