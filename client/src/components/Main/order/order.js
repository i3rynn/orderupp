import React, { Component } from "react";
import OrderItem from "./orderItem";

class Order extends Component {
  render() {
    return (
      <div className="right order-wrapper">
      <h3>Items added to your order</h3>
      {this.props.orderItems.map(item => (
        <OrderItem key={item._id} {...item} removeOrder={() => this.props.removeOrder(item._id)} />
        ))}
      </div>
      )
  }
}

export default Order;
