import * as React from 'react';
import Popper, { PopperProps } from '@mui/material/Popper';

export interface WPopperProps extends PopperProps {
}

export class WPopper extends React.Component<WPopperProps, {}> {
  public render() {
    return <Popper {...this.props}/>
  }
}