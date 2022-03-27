import React, { useEffect, useState } from "react";
import "./Home.css";

import CardProduct from "../CardProduct/CardProduct";
import CarruselProduct from "../CarruselProduct/CarruselProduct";
import ModalCar from "../ModalCar/ModalCar";

export default function Home() {
	const [products, setProducts] = useState(null);

	useEffect(() => {
		fetch(
			"https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js"
		)
			.then((result) => result.json())
			.then((data) => {
				const ProductData = {
					id: data.id,
					title: data.title,
					price: data.price,
					price_max: data.price_max,
					description: data.description,
					images: data.media,
					options: data.options,
				};
				setProducts(ProductData);
			});
	}, []);

	return (
		<div className="Home">
			{products && <CarruselProduct images={products.images} />}
			{products && <CardProduct products={products} />}
			{products && <ModalCar product={products.title} />}
		</div>
	);
}
