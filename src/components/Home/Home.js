import React from "react";
import "./Home.css";

import CardProduct from "../CardProduct/CardProduct";
import CarruselProduct from "../CarruselProduct/CarruselProduct";

export default function Home() {
	return (
		<div class="Home">
			<CarruselProduct />
			<CardProduct />
		</div>
	);
}
