import React from "react";
import "./Navbar.css";

export default function Navbar() {
	return (
		<div>
			<nav>
				<div class="nav-logo g-font">Ark-Nex</div>
				<div class="nav-link">
					<router-link to="/">Home</router-link>
				</div>
			</nav>
		</div>
	);
}
