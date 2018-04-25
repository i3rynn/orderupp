import React from "react";
import "./foodcontainer.css";

const foodcontainer = props => (
<img src="http://via.placeholder.com/285x285" alt="placeholder" class="img-thumbnail" style="float:left; margin:5px;">

<div class="card" style="width: 32rem; float:left;margin: 1%;">
  <div class="card-body">
    <h5 class="card-title">${props.ingredientTitle}</h5>
    <p class="card-text">${props.ingredientText}</p>
    <a href="#" class="btn btn-primary">Submit Order</a>
  </div>
</div>
);

export default foodcontainer;
