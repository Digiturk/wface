import * as React from 'react';
import { Menu } from '@mui/material';
import { MenuProps } from '@mui/material/Menu';
import { BaseComponentProps } from '../../base/base-component-props';

export type WMenuProps = BaseComponentProps & MenuProps & { 
}

export class WMenu extends React.Component<WMenuProps, {}> {
  public render() {
    return <Menu {...this.props} />
  }
}

export * from './w-menu-item';