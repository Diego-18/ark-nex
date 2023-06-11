import React from 'react';
import FormProduct from '../FormProduct/FormProduct';
import './CardProduct.css';

export default function CardProduct(props) {
	const formattedPrice = (price) =>
		price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

	const { title, price, price_max, options, description } = props.products;

	return (
		<div className="CardProduct b-2 bs-2">
			<div className="CardProduct-title">
				<i>{title}</i>
			</div>
			<div className="CardProduct-price">
				<div className="price_actual">
					<span>$</span>
					{formattedPrice(price)}
				</div>
				<div className="price_old">
					<span>$</span>
					{formattedPrice(price_max)}
				</div>
			</div>
			<div className="CardProduct-Form">
				<FormProduct products={options} />
			</div>
			<div className="CardProduct-description">
				<i>{description.replace(/<\/?span[^>]*>/g, '')}</i>
			</div>
		</div>
	);
}
