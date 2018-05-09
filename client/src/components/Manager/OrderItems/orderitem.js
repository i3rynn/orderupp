import React from 'react';

const OrderItem = (props) =>(
	<li className="list-group-item px-4">
	<div className="d-flex justify-content-between ">
	<p className="lead">Order: {props._id}</p>
	<p className="lead">
	{props.complete ?
	<button className="btn btn-outline-danger float-right" onClick={() => props.changeComplete(props._id, false)}>
	Re-Open Order
	</button> :
	<button className="btn btn-outline-danger float-right" onClick={() => props.changeComplete(props._id, true)}>
	Mark Complete
	</button>
	}</p>
	</div>
	<div className="d-flex">
	<ul>
	{props.items.map(item => <li>{item.name} | ${item.price}</li>)} 
	</ul>
	</div>
	</li>
);

export default OrderItem;