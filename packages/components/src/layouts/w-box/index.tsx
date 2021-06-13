import * as React from 'react';
import { Box } from '@material-ui/core';
import { BoxProps } from '@material-ui/core/Box';

export interface WBoxProps extends BoxProps { }

export class WBox extends React.Component<WBoxProps, {}> {
  public render() {
    return <Box {...this.props} />
  }
}
