import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "react-bulma-components/dist/react-bulma-components.min.css";
import AuthService from "./services/AuthService";
import App from "./containers/App";

AuthService.init();

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
