import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import Scrollbar from 'smooth-scrollbar';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-164675990-1');
ReactGA.pageview(window.location.pathname + window.location.search);


Scrollbar.init(document.querySelector('#root'));

ReactDOM.render(<App />, document.getElementById('root'));
