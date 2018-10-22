import * as React from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router';
import WMainPage from '../w-main-page';
import WMuiThemeProvider from './WMuiThemeProvider';
import { store, UserContextActions } from '@wface/store';
import { WSnackbarProvider } from '@wface/components';
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
          <InnerContainer configuration={this.props.configuration}/>
        </HashRouter>
      </Provider>
    );
  }
};

let InnerContainer = (props: any) => {
  const isLoggedIn = props.userContext.isLoggedIn;
  const configuration = props.configuration as IConfiguration;
  const LoginScreen = configuration.loginScreen;

  return (
    <WMuiThemeProvider>
      <WSnackbarProvider 
        maxSnack={3} 
        anchorOrigin={{vertical: 'top', horizontal: 'right'}} 
        autoHideDuration={5000}
        disableWindowBlurListener={true}
        style={{display: 'block'}}
      >
        <Route exact path="/" render={subProps => <Redirect to="/main" />} />
        <Route path="/login" render={(subProps:any) => isLoggedIn ? <Redirect to="/main" /> : <LoginScreen {...subProps} authService={configuration.authService}/>}/>
        <Route path="/main" render={(subProps:any) => isLoggedIn ? <WMainPage {...subProps} configuration={configuration}/> : <Redirect to="/login" /> }/>
      </WSnackbarProvider>
    </WMuiThemeProvider >
  )
}

const mapStateToProps = (state:any) => ({
  userContext: state.userContext
});

const mapDispatchToProps = (dispatch:any) => ({
  login: (username:string, displayName: string, token: string) => dispatch(UserContextActions.login({username, displayName, token})),  
});

InnerContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(InnerContainer) as any) as any

export default WContainer;