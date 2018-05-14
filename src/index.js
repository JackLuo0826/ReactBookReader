import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import AppCustomName from './components/app';
import reducersCustomName from './reducers/index';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducersCustomName)}>
    <AppCustomName />
  </Provider>
  , document.querySelector('.container'));
