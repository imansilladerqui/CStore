import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {createMuiTheme} from '@material-ui/core/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from '@material-ui/styles';

import "./style/index.css";

const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Quicksand'
      ]
    }
  });

ReactDOM.render(
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>,
    document.getElementById('root')
);