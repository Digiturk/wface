import { Paper, withTheme } from '@material-ui/core';
import { PaperProps } from '@material-ui/core/Paper';
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

export const WPaper = withTheme()((props: WPaperProps) => <WPaperInner {...props}/>)

