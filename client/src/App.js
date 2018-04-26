import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route component={Main} />
      </Switch>
    </div>
  </Router>
);

export default App;
