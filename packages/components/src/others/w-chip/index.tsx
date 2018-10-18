import * as React from 'react';
import { Chip } from '@material-ui/core';
import { ChipProps } from '@material-ui/core/Chip';

export interface WChipProps extends ChipProps { }

export class WChip extends React.Component<WChipProps, any> {
  public render() {
    return <Chip {...this.props} />
  }
}