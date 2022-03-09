import * as React from 'react';
import { Toolbar } from '@mui/material';
import { ToolbarProps } from '@mui/material/Toolbar';
import { BaseComponentProps } from '../../base/base-component-props';

export type WToolBarProps = BaseComponentProps & ToolbarProps & { 
}

export class WToolBar extends React.Component<WToolBarProps, {}> {
  public render() {
    return <Toolbar {...this.props} />;
  }
}
