import * as React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import orange from '@material-ui/core/colors/orange';

import { Palette, PaletteColor, TypeText, TypeAction, TypeBackground, SimplePaletteColorOptions } from "@material-ui/core/styles/createPalette";
import { CommonColors } from "@material-ui/core/colors/common";
import { PaletteType, Color } from "@material-ui/core";

interface WPalette extends Palette {    
    info: PaletteColor;
    success: PaletteColor;
    warning: PaletteColor;
}

// All the following keys are optional.
// We try our best to provide a great default value.
const theme = createMuiTheme({
    palette: {        
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
        }
    } as WPalette
});

// <MuiThemeProvider theme={theme}>
export default class WMuiThemeProvider extends React.Component<{}, {}> {
    public render() {
        return (
            <MuiThemeProvider theme={theme}>
                {this.props.children}
            </MuiThemeProvider>
        );
    }
}