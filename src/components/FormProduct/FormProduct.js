import React from "react";
import "./FormProduct.css";

export default function FormProduct(props) {
	const { name, value } = props.products;
	return (
		<div>
			<div className="options-form">
				{props.products.map((option, index) => (
					<div key={index}>
						<label>{option.name}</label>
						<select>
							{option.values.map((value, index) => (
								<option key={index}>{value}</option>
							))}
						</select>
					</div>
				))}
			</div>
			<div className="button-panel">
				<button onclick="">Add To Favorite</button>
				<button onclick=""> Add To Car</button>
			</div>
		</div>
	);
}
