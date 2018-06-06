import * as WFace from '@wface/components';
import * as React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import WLoginPage from '../w-login-page';
import WMainPage from '../w-main-page';
import WMuiThemeProvider from './WMuiThemeProvider';
import { store } from '@wface/store';
import { Provider } from 'react-redux';


class WContainer extends React.Component<any, {}> { 
    constructor(props) {
        super(props);
    }  
    
    render() {                
        return ( 
            <Provider store={store}>
                <BrowserRouter> 
                    <WMuiThemeProvider>                        
                        <Route exact path="/" render={props => <Redirect to="/main"/>}/>
                        <Route path="/main" component={WMainPage} />
                        <Route path="/login" component={WLoginPage} />    
                    </WMuiThemeProvider >
                </BrowserRouter>
            </Provider>
        );
    }
};

export default WContainer;