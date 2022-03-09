import * as React from 'react';
import { Divider } from '@mui/material';
import { DividerProps } from '@mui/material/Divider';

export interface WDividerProps extends DividerProps { }

export class WDivider extends React.Component<WDividerProps, {}> {
  public render() {
    return <Divider {...this.props} />
  }
}
