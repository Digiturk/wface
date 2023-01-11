import { Paper } from '@mui/material';
import { PaperProps } from '@mui/material/Paper';
import * as React from 'react';
import { WTheme } from '../../others/w-theme-provider/w-theme';
import { useTheme } from '@mui/styles';

export interface WPaperProps extends PaperProps {
}

export const WPaper: React.FC<WPaperProps> = React.forwardRef((props) => {
  const theme = useTheme<WTheme>();

  return <Paper elevation={theme.designDetails?.defaultElevation} {...props} />
});