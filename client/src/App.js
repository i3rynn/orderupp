import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pin from "./components/Pin";
import Order from "./components/Order";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/order" component={Order} />
        <Route component={Pin} />
      </Switch>
    </div>
  </Router>
);

export default App;
