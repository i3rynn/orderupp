import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Main from "./components/Main";
import Manager from "./components/Manager";
import NotFound from "./components/NotFound";

const App = () => (
  <Router>
      <Switch>
		<Route path="/order" component={Main} />
		<Route path="/manage" component={Manager} />
		<Redirect from="/" to="/order" />
        <Route component={NotFound} />
      </Switch>
  </Router>
);

export default App;
