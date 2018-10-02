// We have to provide a Promise polyfill if we're targeting older browsers
// because import() returns a promise which resolves once the module is loaded
import * as ES6Promise from "es6-promise";
import * as React from 'react';
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import App from './App';
ES6Promise.polyfill();

render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById("root")
);

// Hot Module Replacement API
declare let module: { hot: any };

if (module.hot) {
  module.hot.accept("./App", () => {
    const NewApp = require("./App").default;

    render(
      <AppContainer>
        <NewApp />
      </AppContainer>,
      document.getElementById("root")
    );
  });
}
