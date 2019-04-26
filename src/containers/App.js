import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

import NavBar from "../components/NavBar";
import Public from "../containers/Public";
import Private from "../containers/Private";

const history = createBrowserHistory();

const App = () => {
  return (
    <div>
      <Router history={history}>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Public} />
          <Route path="/private" component={Private} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
