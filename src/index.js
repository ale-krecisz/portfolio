import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import Scrollbar from 'smooth-scrollbar';

Scrollbar.init(document.querySelector('#root'));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
