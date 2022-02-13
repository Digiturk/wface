import { WSnackbarProvider, WThemeProvider } from '@wface/components';
import IOC, { IAuthService, IConfiguration } from '@wface/ioc';
import { AppContextActions } from '@wface/store';
import * as React from 'react';
import { connect } from 'react-redux';
// @ts-ignore
import { withRouter } from 'react-router';
// @ts-ignore
import { Redirect, Route, BrowserRouter } from 'react-router-dom';

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
  }

  render() {
    const isLoggedIn = this.props.userContext.isLoggedIn;
    const configuration = this.props.appContext.configuration as IConfiguration;    
        
    const authService = IOC.get<IAuthService>("IAuthService")
  
    return (
      <WThemeProvider theme={configuration.theme}>
        <WSnackbarProvider
          maxSnack={3}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          autoHideDuration={5000}
        >
          <>
            {/** @ts-ignore */}
            <Route path="/" render={subProps => <Redirect to="/main" />} />
            {/** @ts-ignore */}
            <Route path="/login/:screen?" render={(subProps: any) => isLoggedIn || configuration.authRequired === false ?
              <Redirect to={`/main/${subProps.match.params.screen || ''}`} />
              :
              <configuration.components.LoginPage {...subProps} authService={authService} appContext={this.props.appContext} userContext={this.props.userContext} setValue={this.props.setValue} />
            } />
            {/** @ts-ignore */}
            <Route path="/main" render={(subProps: any) => isLoggedIn  || configuration.authRequired === false ? <configuration.components.MainPage {...subProps} style={{ height: '100%' }} /> : <Redirect to={this.props.location.pathname.replace('main', 'login')} />} />
          </>
        </WSnackbarProvider>
      </WThemeProvider >
    )
  }
}

const mapStateToProps = (state: any) => ({
  userContext: state.userContext,
  appContext: state.appContext
});

const mapDispatchToProps = (dispatch: any) => ({
  setValue: (key: string, value: any) => dispatch(AppContextActions.setValue({ key, value })),
});

const WrappedInnerContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(InnerContainer) as any) as any

export default WContainer;