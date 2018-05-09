// import React from "react";
// import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// import Main from "./components/Main";
// import NotFound from "./components/NotFound";

// const App = () => (
//   <Router>
//       <Switch>
//    <Route path="/order" component={Main} />
//    <Redirect from="/" to="/order" />
//         <Route component={NotFound} />
//       </Switch>
//   </Router>
// );

//export default App;

///////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import { Route, Router } from 'react-router-dom';
import AppLogin from './AppLogin';
import Main from "./components/Main";
import Manager from "./components/Manager";
import NotFound from "./components/NotFound";
import Home from './Home/Home';
//import Order from './Order/Order';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
      <Router history={history}>
        <div>
          <Route path="/" render={(props) => <AppLogin auth={auth} {...props} />} />
          <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
          <Route path="/manager" render={(props) => <Manager auth={auth} {...props} />} />
          <Route path="/order" component={Main} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
        </div>
      </Router>
  );
}