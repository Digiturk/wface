import * as React from 'react';
import * as ReactDOM from 'react-dom';
import "reflect-metadata";
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import {WContainer} from "@wface/container";

ReactDOM.render(
  <WContainer />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
