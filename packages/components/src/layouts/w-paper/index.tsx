import { Paper } from '@mui/material';
import withTheme from '@mui/styles/withTheme';
import { PaperProps } from '@mui/material/Paper';
import * as React from 'react';
import { WTheme } from '../../others/w-theme-provider/w-theme';

export interface WPaperProps extends PaperProps { 
  theme?: WTheme;
}

export const   WPaperInner  : React.FC<WPaperProps> = React.forwardRef((props) => {
  return <Paper elevation={props.theme.designDetails.defaultElevation} {...props}/>
});



export const WPaper = withTheme(WPaperInner);

