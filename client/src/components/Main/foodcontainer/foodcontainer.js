import React from "react";
import "./foodcontainer.css";

const Foodcontainer = props => (
	<React.Fragment>
	<img src={props.image} alt={props.name} className="img-thumbnail" />

	<div className="card">
	<div className="card-body">
	<h5 className="card-title">{props.name}</h5>
	<p className="card-text">{props.desc}</p>
	<button className="btn btn-primary" onClick={props.addOrder}>Add to Order</button>
	</div>
	</div>
	</React.Fragment>
);

export default Foodcontainer;
