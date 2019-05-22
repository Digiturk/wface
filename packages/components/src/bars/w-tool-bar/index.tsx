import * as React from 'react';
import { Toolbar } from '@material-ui/core';
import { ToolbarProps } from '@material-ui/core/Toolbar';
import { BaseComponentProps } from '../../base/base-component-props';

export type WToolBarProps = BaseComponentProps & ToolbarProps & { 
}

export class WToolBar extends React.Component<WToolBarProps, {}> {
  public render() {
    return <Toolbar {...this.props} />;
  }
}
