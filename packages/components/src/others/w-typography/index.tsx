import * as React from 'react';
import { Typography } from '@mui/material';
import { TypographyProps } from '@mui/material/Typography';

export interface WTypographyProps extends TypographyProps { }

export class WTypography extends React.Component<WTypographyProps, any> {
  public render() {
    return <Typography {...this.props} />
  }
}