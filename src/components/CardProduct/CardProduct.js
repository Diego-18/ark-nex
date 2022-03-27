import React from "react";
import FormProduct from "../FormProduct/FormProduct";
import "./CardProduct.css";

export default function CardProduct(props) {
	return (
		<div className="CardProduct b-2 bs-2">
			<div className="CardProduct-title">
				<i>{props.products.title}</i>
			</div>
			<div className="CardProduct-price">
				<div className="price_actual">
					<span>$</span>
					{props.products.price
						.toString()
						.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}
				</div>
				<div className="price_old">
					<span>$</span>
					{props.products.price_max
						.toString()
						.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}
				</div>
			</div>
			<div className="CardProduct-Form">
				{/* Pasar al componente del formulario las variantes */}
				<FormProduct products={props.products.options} />
			</div>
			<div className="CardProduct-description">
				<i>
					{props.products.description
						.split('<span data-mce-fragment="1">')
						.join("")
						.split("</span>")
						.join("")}
				</i>
			</div>
		</div>
	);
}
