import * as React from 'react';
import ToggleButton, { ToggleButtonProps } from '@mui/material/ToggleButton';
import { BaseComponentProps } from '../../base/base-component-props';

export type WToggleButtonProps = BaseComponentProps & ToggleButtonProps & {
}

export class WToggleButton extends React.Component<WToggleButtonProps, {}> {
  public render() {
    return <ToggleButton {...this.props}/>
  }
}