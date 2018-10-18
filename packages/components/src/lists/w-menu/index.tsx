import * as React from 'react';
import { Menu } from '@material-ui/core';
import { MenuProps } from '@material-ui/core/Menu';


export interface WMenuProps extends MenuProps { }

export class WMenu extends React.Component<WMenuProps, {}> {
  public render() {
    return <Menu {...this.props} />
  }
}