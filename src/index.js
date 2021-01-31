import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App' ;
import './styles/styles.css' ;

import {BrowserRouter as Router} from 'react-router-dom' ;

const app = (
  <Router>
    <App />
  </Router>
)
ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  app ,
  document.getElementById('root')
);

serviceWorker.unregister();

