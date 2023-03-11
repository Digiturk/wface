import * as React from 'react';
import Avatar, { AvatarProps } from '@mui/material/Avatar';

export interface WAvatarProps extends AvatarProps { }

export const WAvatar: React.FC<WAvatarProps> = React.forwardRef((props, ref) => {
  return (
    <Avatar  {...props} ref={ref} />
  );
});

