import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import { Provider } from 'react-redux';
import store from './store/index.js';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={ store }>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
