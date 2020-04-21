import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import Scrollbar from 'smooth-scrollbar';

Scrollbar.init(document.querySelector('#root'));

ReactDOM.render(<App />, document.getElementById('root'));
