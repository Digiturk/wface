import * as React from 'react';
import { ListItemSecondaryAction } from '@mui/material';
import { ListItemSecondaryActionProps } from '@mui/material/ListItemSecondaryAction';

export interface WListItemSecondaryActionProps extends ListItemSecondaryActionProps { }

export class WListItemSecondaryAction extends React.Component<WListItemSecondaryActionProps, {}> {
  public render() {
    return <ListItemSecondaryAction {...this.props} />;
  }
}