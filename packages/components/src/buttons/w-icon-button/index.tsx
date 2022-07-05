import * as React from 'react';
import { IconButton, Icon } from '@mui/material';
import { IconButtonProps } from '@mui/material/IconButton';
import { WIcon } from '../../medias/w-icon'
import { BaseComponentProps } from '../../base/base-component-props';

export type WIconButtonProps = BaseComponentProps & IconButtonProps & {
  icon?: string

}

export const WIconButton: React.FC<WIconButtonProps> = (props) => {
  return (
    <IconButton size="large" {...props}>
      {props.icon ? <WIcon>{props.icon}</WIcon> : props.children}
    </IconButton>
  );
};


