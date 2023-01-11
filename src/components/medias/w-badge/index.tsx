import * as React from 'react';
import Badge, { BadgeProps } from '@mui/material/Badge';

export interface WBadgeProps extends BadgeProps {
}
export const WBadge : React.FC<WBadgeProps> = React.forwardRef((props) => {
  return (
    <Badge  {...props} />
  );
});

