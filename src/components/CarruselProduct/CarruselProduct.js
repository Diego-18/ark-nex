import React from "react";
import "./CarruselProduct.css";

// Recibir el array de imagenes del producto
export default function CarruselProduct(props) {
	return (
		<div className="Carrusel">
			<div className="ContainerCarrusel">
				{props.images.map((image, index) => (
					<img
						key={image.id}
						src={image.preview_image.src}
						alt={image.alt}
						className="CarruselProduct-image"
					/>
				))}
			</div>
		</div>
	);
}
