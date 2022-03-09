import * as React from 'react';
import { ListItemText } from '@mui/material';
import { ListItemTextProps } from '@mui/material/ListItemText';

export interface WListItemTextProps extends ListItemTextProps { }

export class WListItemText extends React.Component<WListItemTextProps, {}> {
  public render() {
    return <ListItemText {...this.props} />;
  }
}