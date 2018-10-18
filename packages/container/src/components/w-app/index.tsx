// We have to provide a Promise polyfill if we're targeting older browsers
// because import() returns a promise which resolves once the module is loaded
import { WContainer } from "@wface/container";
import * as React from 'react';
import MockAuthService from './MockAuthService';
import { store, UserContextActions } from '@wface/store';
import { IConfiguration, DefaultAuthService } from '@wface/ioc';
import WLoginPage from '../w-login-page';

const onLogin = (username: string, displayName: string, token?: string) => store.dispatch(UserContextActions.login({username, displayName, token}));

class WApp extends React.Component<{configuration: IConfiguration}, any> {
  constructor(props) {
    super(props);
    const configuration = this.getConfig(props);
    this.state = {
      configuration: configuration
    }
  }

  getConfig(props: {configuration: IConfiguration}): IConfiguration {    
    let config = {...props.configuration};
    config.loginScreen = props.configuration.loginScreen || WLoginPage;
    config.authService = new DefaultAuthService(props.configuration.authService || new MockAuthService(), onLogin);

    return config;
  }

  public render() {

    return (
      <WContainer configuration={this.state.configuration} />
    );
  }

  public componentDidMount() {
    document.title = this.props.configuration.title;
  }
}

export default WApp