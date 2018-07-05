// We have to provide a Promise polyfill if we're targeting older browsers
// because import() returns a promise which resolves once the module is loaded
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import { store } from '@wface/store';
import { Provider } from 'react-redux';


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById("root")
);
