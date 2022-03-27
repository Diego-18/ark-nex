import React from "react";
import "./FormProduct.css";

export default function FormProduct(props) {
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
				<a className="btn" href="https://ark-nex.netlify.app">
					Add To Favorite
				</a>
				<a className="btn" href="#AddCar">
					Add To Car
				</a>
			</div>
		</div>
	);
}
