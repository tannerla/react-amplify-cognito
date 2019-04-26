import React, {Fragment} from "react";
import ReactDOM from "react-dom";

import {ThemeProvider} from 'styled-components';
import theme from './utils/theme';
import GlobalStyles from './utils/globals';

import App from "./containers/App";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Fragment>
      <App />
      <GlobalStyles />
    </Fragment>
  </ThemeProvider>,
  document.getElementById("root")
);
