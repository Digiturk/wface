import * as React from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router';
import WMainPage from '../w-main-page';
import WMuiThemeProvider from './WMuiThemeProvider';
import { store, UserContextActions } from '@wface/store';
import { Provider } from 'react-redux';
import { IConfiguration } from '@wface/ioc';
import { connect } from 'react-redux';

class WContainer extends React.Component<{configuration: IConfiguration}, {}> {

  constructor(props: any) {
    super(props);
  }

  render() { 
    
    return (
      <Provider store={store}>
        <HashRouter>
          <WMuiThemeProvider>
            <Routes configuration={this.props.configuration}/>
          </WMuiThemeProvider >
        </HashRouter>
      </Provider>
    );
  }
};



const RoutesInner = (props:any) => {
  const isLoggedIn = props.userContext.isLoggedIn;
  const configuration = props.configuration as IConfiguration;
  const LoginScreen = configuration.loginScreen;

  return (
    <React.Fragment>
      <Route exact path="/" render={subProps => <Redirect to="/main" />} />
      <Route path="/login" render={(subProps:any) => isLoggedIn ? <Redirect to="/main" /> : <LoginScreen {...subProps} authService={configuration.authService}/>}/>
      <Route path="/main" render={(subProps:any) => isLoggedIn ? <WMainPage {...subProps} configuration={configuration}/> : <Redirect to="/login" /> }/>
    </React.Fragment>
  )
}

const mapStateToProps = (state:any) => ({
  userContext: state.userContext
});

const mapDispatchToProps = (dispatch:any) => ({
  login: (username:string, displayName: string, token: string) => dispatch(UserContextActions.login({username, displayName, token})),  
});


const Routes = withRouter(connect(mapStateToProps, mapDispatchToProps)(RoutesInner) as any) as any

export default WContainer;