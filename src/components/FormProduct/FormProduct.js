import React from 'react';
import './FormProduct.css';

export default function FormProduct(props) {
	return (
		<div>
			<div className="options-form">
				{props.products.map((option) => (
					<div key={option.name}>
						<label>{option.name}</label>
						<select>
							{option.values.map((value) => (
								<option key={value}>{value}</option>
							))}
						</select>
					</div>
				))}
			</div>
			<div className="button-panel">
				<a className="btn" href="https://ark-nex.netlify.app">
					Add To Favorite
				</a>
				<a className="btn" href="#AddCar">
					Add To Cart
				</a>
			</div>
		</div>
	);
}
