import * as React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import * as ES6Promise from "es6-promise";
import WApp from '@wface/container/src/components/w-app';
import config from './configs/wface/wface.config';
ES6Promise.polyfill();

const rootEl = document.getElementById("root");

render(
  <AppContainer>
    <WApp configuration={config}/>
  </AppContainer>,
  rootEl
);

// Hot Module Replacement API
declare let module: { hot: any };

if (module.hot) {
  module.hot.accept("@wface/container/src/components/w-app", () => {
    const NewApp = require("@wface/container/src/components/w-app").default;

    render(
      <AppContainer>
        <NewApp configuration={config}/>
      </AppContainer>,
      rootEl
    );
  });
}