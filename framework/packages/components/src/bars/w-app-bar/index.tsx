import * as React from 'react';
import AppBar, { AppBarProps } from '@material-ui/core/AppBar';

export interface WAppBarProps extends AppBarProps { }

export class WAppBar extends React.Component<WAppBarProps, {}> {
  public render() {
    return <AppBar {...this.props} />
  }
}