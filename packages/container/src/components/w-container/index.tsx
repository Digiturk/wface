import * as React from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router';
import WMainPage from '../w-main-page';
import { store, UserContextActions, AppContextActions } from '@wface/store';
import { WSnackbarProvider, WThemeProvider } from '@wface/components';
import { Provider } from 'react-redux';
import { IConfiguration } from '@wface/ioc';
import { connect } from 'react-redux';

class WContainer extends React.Component<{configuration: IConfiguration}, {}> {

  constructor(props: any) {
    super(props);    
    this.setConfig(props.configuration);
  }

  setConfig = (config:IConfiguration) => {
    store.dispatch(AppContextActions.setConfig(config));
  }

  render() { 
    return (
      <Provider store={store}>
        <HashRouter>
          <InnerContainer/>
        </HashRouter>
      </Provider>
    );
  }
};

let InnerContainer = (props: any) => {
  const isLoggedIn = props.userContext.isLoggedIn;
  const configuration = props.appContext.configuration as IConfiguration;
  const LoginScreen = configuration.loginScreen;

  return (
    <WThemeProvider theme={configuration.theme}>
      <WSnackbarProvider 
        maxSnack={3} 
        anchorOrigin={{vertical: 'top', horizontal: 'right'}} 
        autoHideDuration={5000}
        disableWindowBlurListener={true}
        style={{display: 'block'}}
      >
        <Route exact path="/" render={subProps => <Redirect to="/main" />} />
        <Route path="/login/:screen?" render={(subProps:any) => isLoggedIn ? 
          <Redirect to={`/main/${subProps.match.params.screen || ''}`} />
          :
          <LoginScreen {...subProps} authService={configuration.authService}/>
        }/>
        <Route path="/main" render={(subProps:any) => isLoggedIn ? <WMainPage {...subProps}/> : <Redirect to={props.location.pathname.replace('main', 'login')}/> }/>
      </WSnackbarProvider>
    </WThemeProvider >
  )
}

const mapStateToProps = (state:any) => ({
  userContext: state.userContext,
  appContext: state.appContext
});

const mapDispatchToProps = (dispatch:any) => ({
  login: (username:string, displayName: string, token: string) => dispatch(UserContextActions.login({username, displayName, token})),  
});

InnerContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(InnerContainer) as any) as any

export default WContainer;