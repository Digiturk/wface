import * as React from 'react';
import { CardHeader } from '@mui/material'
import { CardHeaderProps } from '@mui/material/CardHeader';

export interface WCardHeaderProps extends CardHeaderProps { }

export class WCardHeader extends React.Component<WCardHeaderProps, {}> {
  public render() {
    return <CardHeader {...this.props} />
  }
}