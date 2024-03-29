import React from 'react';
import './CarruselProduct.css';

export default function CarruselProduct(props) {
	return (
		<div className="Carrusel b-2 bs-2">
			<div className="ContainerCarrusel">
				{props.images.map((image) => (
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
