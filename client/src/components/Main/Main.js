import React, { Component } from "react";
import API from "../../utils/API";

import * as Order from "./order";
import * as Foodcontainer from "./foodcontainer";
import * as Chooser from "./chooser";

class Main extends Component {
  state = {
    userpin: "",
    menuoptions: {},
    orderitems: []
  };

  componentDidMount() {
  	// check for user session
    const localList = localStorage.getItem('userpin');
    if(!localList){
    	return this.props.history.push('/');
    }
    this.setState({userpin: localList});

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
    	<Order />
    	<Chooser />

    	<div>Fill in with footer info (total calulation)</div>
    	</div>
    );
  }
}

export default Main;
