import * as React from 'react';
import { Box } from '@mui/material';
import { BoxProps } from '@mui/material/Box';

export interface WBoxProps extends BoxProps { }

export class WBox extends React.Component<WBoxProps, {}> {
  public render() {
    return <Box {...this.props} />
  }
}
