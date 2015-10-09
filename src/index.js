import React from 'react';
import ReactDOM from 'react-dom';
import { compose, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import App from './containers/App';
import * as reducers from './reducers';

// let store = createStore(overlayApp);
const finalCreateStore = compose(
  // applyMiddleware(thunk),
  devTools(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

const reducer = combineReducers(reducers);
const store = finalCreateStore(reducer);

if (module.hot) {
  module.hot.accept('../reducers', () =>
    store.replaceReducer(combineReducers(require('../reducers')))
  );
}

ReactDOM.render(
    <div>
      <Provider store={store}>
        {<App />}
      </Provider>
      <DebugPanel top right bottom>
        <DevTools store={store} monitor={LogMonitor} visibleOnLoad={false} />
      </DebugPanel>
    </div>,
  document.getElementById('root')
);
