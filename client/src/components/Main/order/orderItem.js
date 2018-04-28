import React from "react";

const OrderItem = props => (
	<div>
	<img src={props.image} alt={props.name} className="img-thumbnail" />
	<div className="card">
	<div className="card-body">
	<h5 className="card-title">{props.name}</h5>
	<p className="card-text">{props.desc}</p>
	<button className="btn btn-primary" onClick={() => props.removeOrder(props._id)}>Remove From Order</button>
	</div>
	</div>
	</div>
);

export default OrderItem;
