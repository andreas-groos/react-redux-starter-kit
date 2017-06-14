//  in configureStore.js.bkp there is the orginal file, but it throws an error
//  Everything works with this version, including logger and thunk

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers';

const logger = createLogger();

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk, logger));
}
