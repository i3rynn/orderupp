import React, { Component } from "react";
import thumbnails from "../components/order/thumbails";
import foodcontainer from "../components/order/foodcontainer";
// import necessary stuff

class Order extends Component {
  state = {
    imageThumbnails: "",
    image: "",
    orderThumbnails: "",
  };

  componentDidMount() {

  }

  handleBtnClick = event => {

  };

  render() {
    return (
      <div>
        <thumbnails imageurl = {this.state.imageThumbnails} />
      </div>
    )
  }
}
