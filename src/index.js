import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; //applyMiddleware connects middleware to Redux Store
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

//extract createStore(reducers) and wire up middleware to store
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
