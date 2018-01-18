import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './containers/appContainer';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { configureStore } from './store/configureStore';

const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
