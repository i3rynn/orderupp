import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pin from "./components/Pin";
import Main from "./components/Main";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/order" component={Main} />
        <Route component={Pin} />
      </Switch>
    </div>
  </Router>
);

export default App;
