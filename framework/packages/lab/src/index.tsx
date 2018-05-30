import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Module } from 'react.di';
import "reflect-metadata";
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import MockAuthService from './mock/MockAuthService';

import { store, WContainer} from "@wface/container";

import * as PropTypes from 'prop-types';

import { UserContext } from '@wface/ioc';

@Module({
  providers: [
    {provide: "IAuthService", useClass: MockAuthService}
  ]
})
class App extends React.Component<any, any> {
  public static childContextTypes = {
    userContext: PropTypes.object
  }

  public getChildContext() {
    return {
      userContext: this.props.userContext
    }
  }

  public render() {
    return (      
        <WContainer/>     
    );
  }
}

const initialState = {
  displayName: '',
  isLoggedIn: true,
  username: ''
} as UserContext;

ReactDOM.render(
  <App userContext={initialState}/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
