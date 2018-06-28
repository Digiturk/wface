import * as React from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom'
import WLoginPage from '../w-login-page';
import WMainPage from '../w-main-page';
import WMuiThemeProvider from './WMuiThemeProvider';
import { store } from '@wface/store';
import { Provider } from 'react-redux';

class WContainer extends React.Component<any, {}> { 
    constructor(props:any) {
        super(props);
    }  
    
    render() {                
        return ( 
            <Provider store={store}>
                <HashRouter> 
                    <WMuiThemeProvider>                        
                        <Route exact path="/" render={props => <Redirect to="/main"/>}/>
                        <Route path="/main" component={WMainPage} />
                        <Route path="/login" component={WLoginPage} />    
                    </WMuiThemeProvider >
                </HashRouter>
            </Provider>
        );
    }
};

export default WContainer;