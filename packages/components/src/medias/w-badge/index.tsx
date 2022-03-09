import * as React from 'react';
import Badge, { BadgeProps } from '@mui/material/Badge';

export interface WBadgeProps extends BadgeProps {
}

export class WBadge extends React.Component<WBadgeProps, {}> {
  public render() {
    return <Badge {...this.props}/>
  }
}