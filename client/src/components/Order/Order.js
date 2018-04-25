import React, { Component } from "react";
import API from "../../utils/API";

class Order extends Component {
  state = {
    userpin: '',
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
    	this.setState({menuoptions})
    });
  }

  handleBtnClick = event => {

  }

  render() {
    return (
    	<div></div>
    );
  }
}

export default Order;
