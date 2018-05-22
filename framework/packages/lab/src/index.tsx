import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Module } from 'react.di';
import "reflect-metadata";
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import MockAuthService from './mock/MockAuthService';

import { WContainer } from "@wface/container";


@Module({
  providers: [
    {provide: "IAuthService", useClass: MockAuthService},
  ]
})
class App extends React.Component<{}, {}> {
  public render() {
    return <WContainer/> 
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
