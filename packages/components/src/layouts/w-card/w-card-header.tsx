import * as React from 'react';
import { CardHeader } from '@material-ui/core'
import { CardHeaderProps } from '@material-ui/core/CardHeader';

export interface WCardHeaderProps extends CardHeaderProps { }

export class WCardHeader extends React.Component<WCardHeaderProps, {}> {
  public render() {
    return <CardHeader {...this.props} />
  }
}