import * as React from 'react';
import { WTheme } from './w-theme';
import { WPalette } from './w-palette';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/styles';

import { blue, green, orange, red } from '@mui/material/colors';
import { merge } from 'lodash';
import { WDesignDetails } from './w-design-details';

const defaultTheme = {
  palette: {
    type: 'light',
    error: {
      light: red[300],
      main: red[500],
      dark: red[700],
      contrastText: '#fff'
    },
    info: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
      contrastText: '#fff'
    },
    success: {
      light: green[300],
      main: green[500],
      dark: green[700],
      contrastText: '#fff'
    },
    warning: {
      light: orange[300],
      main: orange[500],
      dark: orange[700],
      contrastText: '#fff'
    },
    background: {
      default: '#e8eaf5',
      paper: '#FFFFFF'
    }
  } as WPalette,
  typography: {
    useNextVariants: true
  },
  designDetails: {
    defaultElevation: 0,
    pagePadding: 0,
    isTabVisible:false,

  } as WDesignDetails
};

export const WThemeProvider: React.FC<{ theme?: WTheme }> = ({ theme, children }) => {

  const mergedTheme = React.useMemo(() => {
    const merged = merge(defaultTheme, theme);
    const result = createTheme(merged);

    return result;
  }, [theme]);

  return (
    <ThemeProvider theme={mergedTheme}>
      {children}
    </ThemeProvider>
  )
}

// <MuiThemeProvider theme={theme}>
// export class WThemeProvider extends React.Component<{ theme?: WTheme }, any> {
//   constructor(props: any) {
//     super(props);
//     this.state = {
//       theme: this.getTheme()
//     }
//   }

//   componentWillUpdate(prevProps: any) {
//     if (prevProps.theme != this.props.theme) {
//       this.setState({
//         theme: this.getTheme()
//       });
//     }
//   }

//   getTheme() {
//     const merged = merge(defaultTheme, this.props.theme);
//     const theme = createTheme(merged);

//     return theme;
//   }

//   public render() {
//     const theme = this.getTheme();
//     return (

//     );
//   }
// }

export * from './w-design-details';
export * from './w-palette';
export * from './w-theme';