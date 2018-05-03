import React from 'react';


const MenuItem = (props)=>(
	<li className="list-group-item">
	<div className="d-flex justify-content-between ">
	<p className="lead">{props.name}</p>
	<p className="lead">{props.category} | {props.price}</p>
	</div>
	<div className="d-flex">
	{props.desc} 
	</div>
	<button type="button" onClick={()=>this.props.handleDelete(this.props._id)}>
	Delete Menu Item
	</button>
	</li>
);

export default MenuItem;