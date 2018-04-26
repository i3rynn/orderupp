import React, { Component } from "react";
import API from "../../utils/API";

import * as Order from "./order";
import Foodcontainer from "./foodcontainer";
import * as Chooser from "./chooser";

class Main extends Component {
  state = {
    menuoptions: {},
    orderitems: []
  };

  componentDidMount() {
    // get all menu items
    API.getMenu()
    .then(menuoptions => {
    	this.setState({menuoptions});
    });
  }

  render() {
    return (
      <div>
      <Foodcontainer />
      {/* 
      	<Order />
      	<Chooser />
      */}
      <div>Fill in with footer info (total calulation)</div>
      </div>
      );
  }
}

export default Main;
