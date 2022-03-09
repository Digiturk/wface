import * as React from 'react';
import { Chip } from '@mui/material';
import { ChipProps } from '@mui/material/Chip';
import { BaseComponentProps } from '../../base/base-component-props';

export type WChipProps = BaseComponentProps & ChipProps & { 
}

export class WChip extends React.Component<WChipProps, any> {
  public render() {
    return <Chip {...this.props} />
  }
}