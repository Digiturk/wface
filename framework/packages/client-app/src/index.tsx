// We have to provide a Promise polyfill if we're targeting older browsers
// because import() returns a promise which resolves once the module is loaded
import { WContainer } from "@wface/container";
import * as ES6Promise from "es6-promise";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Module } from 'react.di';
import ScreenProvider from './helpers/ScreenProvider';
import MockAuthService from './mock/MockAuthService';
ES6Promise.polyfill();

@Module({
  providers: [
    { provide: "IAuthService", useClass: MockAuthService },
    { provide: "IScreenProvider", useClass: ScreenProvider }
  ]
})
class App extends React.Component<any, any> {
  public render() {
    return (
      <WContainer />
    );
  }
}

ReactDOM.render(<App />,
  document.getElementById("root")
);
