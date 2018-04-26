import React, { Component } from "react";
import API from "../../utils/API";

import * as Order from "./order";
import * as Foodcontainer from "./foodcontainer";
import * as Chooser from "./chooser";

class Main extends Component {
  state = {
    enteredPin: "",
    menuoptions: {},
    orderitems: []
  };

  componentDidMount() {
  	// check for user session
    const enteredPin = localStorage.getItem('enteredPin');
    if(!enteredPin){
    	return this.props.history.push('/');
    }
    this.setState({enteredPin});

    // get all menu items
    API.getMenu()
    .then(menuoptions => {
    	this.setState({menuoptions});
    });
  }

  render() {
    return (
      <div>
      {/* 
      	<Foodcontainer />
      	<Order />
      	<Chooser />
      */}
      <div>Fill in with footer info (total calulation)</div>
      </div>
    );
  }
}

export default Main;
