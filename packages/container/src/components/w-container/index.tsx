import { WSnackbarProvider, WThemeProvider } from '@wface/components';
import IOC, { IAuthService, IConfiguration } from '@wface/ioc';
import { AppContextActions } from '@wface/store';
import * as React from 'react';
import { connect, Provider } from 'react-redux';
import { withRouter } from 'react-router';
import { HashRouter, Redirect, Route, BrowserRouter } from 'react-router-dom';
import WMainPage from '../w-main-page';
// @ts-ignore
import * as queryString from 'query-string'

class WContainer extends React.Component<{}, {}> {

  constructor(props: any) {
    super(props);        
  }

  render() {
    return (
      <BrowserRouter>
        <WrappedInnerContainer />
      </BrowserRouter>
    );
  }
};


class InnerContainer extends React.Component<any, any> {

  constructor(props: any) {
    super(props);      

    const values = queryString.parse(this.props.location.search);
    this.props.setQueryParams(values);    
  }

  render() {
    const isLoggedIn = this.props.userContext.isLoggedIn;
    const configuration = this.props.appContext.configuration as IConfiguration;
    const LoginScreen = configuration.loginScreen;
  
    
  
    const authService = IOC.get<IAuthService>("IAuthService")
  
    return (
      <WThemeProvider theme={configuration.theme}>
        <WSnackbarProvider
          maxSnack={3}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          autoHideDuration={5000}
        >
          <>
            <Route exact path="/" render={subProps => <Redirect to="/main" />} />
            <Route path="/login/:screen?" render={(subProps: any) => isLoggedIn ?
              <Redirect to={`/main/${subProps.match.params.screen || ''}`} />
              :
              <LoginScreen {...subProps} authService={authService} appContext={this.props.appContext} userContext={this.props.userContext} setValue={this.props.setValue} />
            } />
            <Route path="/main" render={(subProps: any) => isLoggedIn ? <WMainPage {...subProps} style={{ height: '100%' }} /> : <Redirect to={this.props.location.pathname.replace('main', 'login')} />} />
          </>
        </WSnackbarProvider>
      </WThemeProvider >
    )
  }
}

// let InnerContainer = (props: any) => {
  
// }

const mapStateToProps = (state: any) => ({
  userContext: state.userContext,
  appContext: state.appContext
});

const mapDispatchToProps = (dispatch: any) => ({
  setValue: (key: string, value: any) => dispatch(AppContextActions.setValue({ key, value })),
  setQueryParams: (search: { [key: string]: any }) => dispatch(AppContextActions.setQueryParams(search))
});

const WrappedInnerContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(InnerContainer) as any) as any

export default WContainer;