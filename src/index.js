import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createServer } from './server';
import { Provider } from 'react-redux';
import store from './store';

createServer();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
