import * as React from 'react';
import { CardContent } from '@mui/material'
import { CardContentProps } from '@mui/material/CardContent';

export interface WCardContentProps extends CardContentProps { }

export class WCardContent extends React.Component<WCardContentProps, {}> {
  public render() {
    return <CardContent {...this.props} />
  }
}