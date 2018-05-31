import { WContainer } from "@wface/container";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Module } from 'react.di';
import "reflect-metadata";
import './index.css';
import MockAuthService from './mock/MockAuthService';
import registerServiceWorker from './registerServiceWorker';

@Module({
  providers: [
    {provide: "IAuthService", useClass: MockAuthService}
  ]
})
class App extends React.Component<any, any> {
  public render() {
    return (      
        <WContainer/>     
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
