import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { setAppElement } from './component-lib';

setAppElement('#root');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
