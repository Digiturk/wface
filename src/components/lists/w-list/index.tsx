import * as React from 'react';
import { List } from '@mui/material';
import { ListProps } from '@mui/material/List';
import { BaseComponentProps } from '../../base/base-component-props';

export type WListProps = BaseComponentProps & ListProps & { 
}

export const WList: React.FC<WListProps> = React.forwardRef((props, ref) => {
  return (
    <List {...props} ref={ref}/>
  );
});



export * from './w-list-item-icon';
export * from './w-list-item-secondary-action';
export * from './w-list-item-text';
export * from './w-list-item';
export * from './w-list-subheader';