import { WSnackbarProvider, WThemeProvider } from '@wface/components';
import IOC, { IAuthService, IConfiguration } from '@wface/ioc';
import { AppContextActions, store } from '@wface/store';
import * as React from 'react';
import { connect, Provider } from 'react-redux';
import { withRouter } from 'react-router';
import { HashRouter, Redirect, Route } from 'react-router-dom';
import WMainPage from '../w-main-page';

class WContainer extends React.Component<{ configuration: IConfiguration }, {}> {

  constructor(props: any) {
    super(props);
    this.setConfig(props.configuration);
  }

  setConfig = (config: IConfiguration) => {
    store.dispatch(AppContextActions.setConfig(config));
  }

  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <InnerContainer />
        </HashRouter>
      </Provider>
    );
  }
};

let InnerContainer = (props: any) => {
  const isLoggedIn = props.userContext.isLoggedIn;
  const configuration = props.appContext.configuration as IConfiguration;
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
            <LoginScreen {...subProps} authService={authService} appContext={props.appContext} userContext={props.userContext} setValue={props.setValue} />
          } />
          <Route path="/main" render={(subProps: any) => isLoggedIn ? <WMainPage {...subProps} style={{ height: '100%' }} /> : <Redirect to={props.location.pathname.replace('main', 'login')} />} />
        </>
      </WSnackbarProvider>
    </WThemeProvider >
  )
}

const mapStateToProps = (state: any) => ({
  userContext: state.userContext,
  appContext: state.appContext
});

const mapDispatchToProps = (dispatch: any) => ({
  setValue: (key: string, value: any) => dispatch(AppContextActions.setValue({ key, value })),
});

InnerContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(InnerContainer) as any) as any

export default WContainer;