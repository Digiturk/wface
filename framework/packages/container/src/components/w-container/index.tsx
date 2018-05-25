import * as React from "react";
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import WLoginPage from '../w-login-page';
import WMainPage from '../w-main-page';
import WMuiThemeProvider from './WMuiThemeProvider';

class WContainer extends React.Component<{},{}> { 
    constructor(props, context) {
        super(props, context);
    }  

    render() {
        
        return (            
            <BrowserRouter> 
                <WMuiThemeProvider>
                    <Route path="/login" component={WLoginPage} />    
                    <Route path="/" component={WMainPage} />
                </WMuiThemeProvider >
            </BrowserRouter>
        );
    }
};


export default WContainer;