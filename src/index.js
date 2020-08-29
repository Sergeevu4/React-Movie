import React from 'react';
import ReactDOM from 'react-dom';
import { store, persistor } from './store';
import { Provider } from 'react-redux';
// Синхронизация LocalStore с Redux store
import { PersistGate } from 'redux-persist/integration/react';
import { App } from './components/App/App';
import { Spinner } from './components';
import { HashRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<Spinner />} persistor={persistor}>
      <Router>
        <App />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
