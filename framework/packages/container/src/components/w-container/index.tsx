import * as React from "react";
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import WLoginPage from '../w-login-page';
import WMainPage from '../w-main-page';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import { blue100 } from "material-ui/styles/colors";

class WContainer extends React.Component<{},{}> { 
    constructor(props, context) {
        super(props, context);
    }  

    render() {
        
        return (            
            <BrowserRouter> 
                <MuiThemeProvider theme={theme}>
                    <Route path="/">
                        {/* <Redirect from="/" to="/main"/> */}
                    </Route>
                    <Route exact path="/main" component={WMainPage} />
                    <Route path="/login" component={WLoginPage} />                    
                </MuiThemeProvider >
            </BrowserRouter>
        );
    }
};



// All the following keys are optional.
// We try our best to provide a great default value.
const theme = createMuiTheme({
    palette: {
      primary: indigo,
      secondary: pink
    }
} as any);
export default WContainer;