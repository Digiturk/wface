import { Paper } from '@mui/material';
import withTheme from '@mui/styles/withTheme';
import { PaperProps } from '@mui/material/Paper';
import * as React from 'react';
import { WTheme } from '../../others/w-theme-provider/w-theme';

export interface WPaperProps extends PaperProps { 
  theme?: WTheme;
}

export class WPaperInner extends React.Component<WPaperProps, {}> {
  public render() {
    return <Paper elevation={this.props.theme.designDetails.defaultElevation} {...this.props}/>;
  }
}

export const WPaper = withTheme(WPaperInner);

