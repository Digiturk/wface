import * as React from 'react';
import { Chip } from '@material-ui/core';
import { ChipProps } from '@material-ui/core/Chip';
import { BaseComponentProps } from '../../base/base-component-props';

export type WChipProps = BaseComponentProps & ChipProps & { 
}

export class WChip extends React.Component<WChipProps, any> {
  public render() {
    return <Chip {...this.props} />
  }
}