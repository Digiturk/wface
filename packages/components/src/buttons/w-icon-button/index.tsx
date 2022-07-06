import * as React from 'react';
import { IconButton, Icon } from '@mui/material';
import { IconButtonProps } from '@mui/material/IconButton';
import { WIcon } from '../../medias/w-icon'
import { BaseComponentProps } from '../../base/base-component-props';
import { Fab } from '@mui/material';

export type WIconButtonProps = BaseComponentProps & IconButtonProps & {
  icon?: string

}

export const WIconButton: React.FC<WIconButtonProps> = React.forwardRef((props,ref) => {
  return (
    <Fab
    >
    <IconButton size="large" {...props}  ref={ref}>
      {props.icon ? <WIcon>{props.icon}</WIcon> : props.children}
    </IconButton>
    </Fab>
  );
});


