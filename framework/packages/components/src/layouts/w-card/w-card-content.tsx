import * as React from 'react';
import { CardContent } from '@material-ui/core'
import { CardContentProps } from '@material-ui/core/CardContent';

export interface WCardContentProps extends CardContentProps { }

export class WCardContent extends React.Component<WCardContentProps, {}> {
  public render() {
    return <CardContent {...this.props} />
  }
}