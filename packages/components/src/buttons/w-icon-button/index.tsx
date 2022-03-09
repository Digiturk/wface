import * as React from 'react';
import { IconButton, Icon } from '@mui/material';
import { IconButtonProps } from '@mui/material/IconButton';
import { WIcon } from '../../medias/w-icon'
import { BaseComponentProps } from '../../base/base-component-props';

export type WIconButtonProps = BaseComponentProps & IconButtonProps & { 
  icon?: string
}

export class WIconButton extends React.Component<WIconButtonProps, {}> {
  public render() {
    return (
      <IconButton {...this.props} size="large">{
        this.props.icon ? <WIcon>{this.props.icon}</WIcon> : this.props.children
      }
      </IconButton>
    );
  }
}