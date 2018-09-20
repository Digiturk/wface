// We have to provide a Promise polyfill if we're targeting older browsers
// because import() returns a promise which resolves once the module is loaded
import { WContainer } from "@wface/container";
import * as ES6Promise from "es6-promise";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Module } from 'react.di';
import MockAuthService from './mock/MockAuthService';
import Projects from './helpers/GeneratedCode';
import { store, UserContextActions } from '@wface/store';
import { IConfiguration, IProjectConfiguration, DefaultConfiguration, ScreenProvider, DefaultAuthService } from '@wface/ioc';
ES6Promise.polyfill();

const defaultProjectConfiguration = {
  title: 'WFace',
  projectName: 'WFace',
  favicon: '',
  authServiceType: MockAuthService,
  businessServiceType: null
} as IProjectConfiguration;

const configuration: IConfiguration = new DefaultConfiguration(Projects, defaultProjectConfiguration);
const onLogin = (username: string, displayName: string, token?: string) => store.dispatch(UserContextActions.login({username, displayName, token}))

@Module({
  providers: [
    { provide: "IConfiguration", useValue: configuration },
    { provide: "IAuthService", useClass: DefaultAuthService },
    { provide: "IAuthServiceInner", useClass: configuration.getAuthServiceType() },
    { provide: "onLogin", useValue: onLogin },
    { provide: "IBusinessService", useClass: configuration.getBusinessServiceType() },
    { provide: "IScreenProvider", useValue: new ScreenProvider(Projects) }
  ]
})
class App extends React.Component<any, any> {
  public render() {
    return (
      <WContainer />
    );
  }

  public componentDidMount() {
    document.title = configuration.getTitle();
  }
}

ReactDOM.render(<App />,
  document.getElementById("root")
);
