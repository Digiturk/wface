import * as React from 'react';
import Popover, { PopoverProps } from '@mui/material/Popover';

export interface WPopoverProps extends PopoverProps {
}

export class WPopover extends React.Component<WPopoverProps, {}> {
  public render() {
    return <Popover {...this.props}/>
  }
}