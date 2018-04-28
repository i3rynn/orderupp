import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Main from "./components/Main";
import NotFound from "./components/NotFound";

const App = () => (
  <Router>
    <div>
      <Switch>
		<Route path="/order" component={Main} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;
