import * as React from 'react';
import { ListItemSecondaryAction } from '@material-ui/core';
import { ListItemSecondaryActionProps } from '@material-ui/core/ListItemSecondaryAction';

export interface WListItemSecondaryActionProps extends ListItemSecondaryActionProps { }

export class WListItemSecondaryAction extends React.Component<WListItemSecondaryActionProps, {}> {
  public render() {
    return <ListItemSecondaryAction {...this.props} />;
  }
}