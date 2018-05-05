import React from "react";
import "./successmodal.css";

const SuccessModal = props => (
	<div className="modal-wrapper">
	<div className="modal-window">
	<h1 className="display-4 mb-3">Your Order Was Submitted</h1>
	<button className="btn" onClick={props.hideModal}>Close</button>
	</div>
	</div>
);

export default SuccessModal;
