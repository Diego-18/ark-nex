import React from "react";
import "./ModalCar.css";

export default function ModalCar(props) {
	return (
		<div id="AddCar" className="modal-bg">
			<div className="dialog bs-2 b-2">
				<a href="#close" title="Close" className="btn-close bs-2">
					X
				</a>
				<div className="modal-body">
					<p>
						Are you sure you want to add the item
						<span className="title-product">{props.product}</span>
						to your shopping cart?
					</p>
				</div>
				<div className="modal-footer">
					<a className="btn" href="#">
						NO
					</a>
					<a className="btn" href="#">
						YES
					</a>
				</div>
			</div>
		</div>
	);
}
