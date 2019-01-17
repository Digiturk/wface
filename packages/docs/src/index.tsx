// We have to provide a Promise polyfill if we're targeting older browsers
// because import() returns a promise which resolves once the module is loaded
import "reflect-metadata";
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import store from './store';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import WMuiThemeProvider from './WMuiThemeProvider';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <WMuiThemeProvider>
        <App />
      </WMuiThemeProvider>
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
