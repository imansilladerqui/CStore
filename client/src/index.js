import App from './App';
import {BrowserRouter} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/normalize.css';
import './assets/css/webflow.css';
import './assets/css/index.css';
import './assets/css/custom.css';

ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('root')
);