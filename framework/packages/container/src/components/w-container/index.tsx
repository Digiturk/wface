import * as WFace from '@wface/components';
import * as React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import WLoginPage from '../w-login-page';
import WMainPage from '../w-main-page';
import WMuiThemeProvider from './WMuiThemeProvider';
import store from '../../redux';
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
                        
                        {/* <Route path="/main" component={WMainPage} /> */}
                        <Route exact path="/" render={props => <Redirect to="/main"/>}/>
                        <Route path="/main" render={props =>
                            store.getState().userContext.isLoggedIn === true ? (
                                <WMainPage />
                            ) : (
                                <Redirect
                                to={{
                                    pathname: "/login",
                                    state: { from: props.location }
                                }}
                                />
                            )
                            } />
                            <Route path="/login" component={WLoginPage} />    
                    </WMuiThemeProvider >
                </BrowserRouter>
            </Provider>
        );
    }
};

export default WContainer;