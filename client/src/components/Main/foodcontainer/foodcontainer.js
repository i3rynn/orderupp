import React from "react";
import "./foodcontainer.css";

const Foodcontainer = props => (
	<React.Fragment>
	<img src="http://via.placeholder.com/285x285" alt="placeholder" className="img-thumbnail" />

	<div className="card">
	<div className="card-body">
	<h5 className="card-title">{props.ingredientTitle}</h5>
	<p className="card-text">{props.ingredientText}</p>
	<button href="#" className="btn btn-primary">Submit Order</button>
	</div>
	</div>
	</React.Fragment>
);

export default Foodcontainer;
