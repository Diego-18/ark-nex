import React from 'react';
import './ModalCar.css';

export default function ModalCar(props) {
	return (
		<div id="AddCar" className="modal-bg">
			<div className="dialog box-shadow-2 border-2">
				<a
					href="#close"
					title="Close"
					className="btn-close box-shadow-2"
				>
					X
				</a>
				<div className="modal-body">
					<p>
						Are you sure you want to add the item{' '}
						<span className="title-product">{props.product}</span>{' '}
						to your shopping cart?
					</p>
				</div>
				<div className="modal-footer">
					<a className="btn" href="https://ark-nex.netlify.app">
						NO
					</a>
					<a className="btn" href="https://ark-nex.netlify.app">
						YES
					</a>
				</div>
			</div>
		</div>
	);
}
