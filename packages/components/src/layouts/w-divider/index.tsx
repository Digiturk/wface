import * as React from 'react';
import { Divider } from '@material-ui/core';
import { DividerProps } from '@material-ui/core/Divider';

export interface WDividerProps extends DividerProps { }

export class WDivider extends React.Component<WDividerProps, {}> {
  public render() {
    return <Divider {...this.props} />
  }
}
