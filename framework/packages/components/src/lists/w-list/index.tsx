import * as React from 'react';
import { List } from '@material-ui/core';
import { ListProps } from '@material-ui/core/List';

export interface WListProps extends ListProps { }

export class WList extends React.Component<WListProps, {}> {
  public render() {
    return <List {...this.props} />
  }
}