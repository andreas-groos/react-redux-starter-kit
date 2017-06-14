// Set up your application entry point here...
// Babel polyfill will emulate a full
// ES2015 environemnt so we can enjoy goodies like
// Promises
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
// import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
// import routes from './routes';
import App from './components/App';

import configureStore from './store/configureStore';


// the window.__... enables redux dev-tools
const store = configureStore(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('app')
);
