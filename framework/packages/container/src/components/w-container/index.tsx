import * as React from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router';
import WLoginPage from '../w-login-page';
import WMainPage from '../w-main-page';
import WMuiThemeProvider from './WMuiThemeProvider';
import { store } from '@wface/store';
import { Provider } from 'react-redux';
import { Inject } from 'react.di';
import { IConfiguration } from '@wface/ioc';
import { connect } from 'react-redux';

class WContainer extends React.Component<any, {}> {

  @Inject("IConfiguration")
  private configuration: IConfiguration;

  constructor(props: any) {
    super(props);
  }

  render() { 
    const LoginScreen = this.configuration.getLoginScreen() || WLoginPage;
    
    return (
      <Provider store={store}>
        <HashRouter>
          <WMuiThemeProvider>
            <Routes loginScreen={LoginScreen} screenProvider={this.props.screenProvider}/>
          </WMuiThemeProvider >
        </HashRouter>
      </Provider>
    );
  }
};



const RoutesInner = (props:any) => {
  const isLoggedIn = props.userContext.isLoggedIn;
  const LoginScreen = props.loginScreen;
  const screenProvider = props.screenProvider;

  return (
    <React.Fragment>
      <Route exact path="/" render={subProps => <Redirect to="/main" />} />
      <Route path="/login" render={(subProps:any) => isLoggedIn ? <Redirect to="/main" /> : <LoginScreen {...subProps}/>}/>
      <Route path="/main" render={(subProps:any) => isLoggedIn ? <WMainPage {...subProps} screenProvider={screenProvider}/> : <Redirect to="/login" /> }/>
    </React.Fragment>
  )
}

const mapStateToProps = (state:any) => ({
  userContext: state.userContext
});

const Routes = withRouter(connect(mapStateToProps)(RoutesInner) as any) as any

export default WContainer;