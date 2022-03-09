import * as React from 'react';
import AppBar, { AppBarProps } from '@mui/material/AppBar';
import { BaseComponentProps } from '../../base/base-component-props';

export type WAppBarProps = BaseComponentProps & AppBarProps & { 
}

export class WAppBar extends React.Component<WAppBarProps, {}> {
  public render() {
    return <AppBar {...this.props} />
  }
}