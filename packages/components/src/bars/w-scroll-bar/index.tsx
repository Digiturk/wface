import * as React from 'react';
import { Toolbar } from '@material-ui/core';
import { ToolbarProps } from '@material-ui/core/Toolbar';
import { Scrollbars } from 'react-custom-scrollbars';

export interface WScrollBarProps { }

export class WScrollBar extends React.Component<WScrollBarProps, {}> {
  public render() {
    return <Scrollbars {...this.props} style={{ width: '100%', height: '100%' }}/>;
  }
}
