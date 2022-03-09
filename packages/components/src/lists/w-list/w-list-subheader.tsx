import * as React from 'react';
import { ListSubheader } from '@mui/material';
import { ListSubheaderProps } from '@mui/material/ListSubheader';

export interface WListSubheaderProps extends ListSubheaderProps { }

export class WListSubheader extends React.Component<WListSubheaderProps, {}> {
  public render() {
    return <ListSubheader {...this.props} />;
  }
}