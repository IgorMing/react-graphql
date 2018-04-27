import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './Reducers';

const store = createStore(todoApp);

export default (App) => (
  <Provider store={store}>
    <App />
  </Provider>
);
