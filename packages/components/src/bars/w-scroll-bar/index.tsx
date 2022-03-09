import * as React from 'react';
import { Toolbar } from '@mui/material';
import { ToolbarProps } from '@mui/material/Toolbar';
import { Scrollbars } from 'react-custom-scrollbars';

export interface WScrollBarProps { }

export class WScrollBar extends React.Component<WScrollBarProps, {}> {
  public render() {
    return <Scrollbars {...this.props} style={{ width: '100%', height: '100%' }}/>;
  }
}
