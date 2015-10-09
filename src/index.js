import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import overlayApp from './reducers';

let store = createStore(overlayApp);

ReactDOM.render(
  <Provider store={store}>
    {<App />}
  </Provider>,
  document.getElementById('root')
);
