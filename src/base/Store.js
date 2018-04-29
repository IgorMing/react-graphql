import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import Thunk from 'redux-thunk';
import todoApp from './Reducers';

const store = createStore(todoApp, applyMiddleware(Thunk));

export default (App) => (
  <Provider store={store}>
    <App />
  </Provider>
);
