import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img
						src="https://chilemiel.cl/wp-content/uploads/2020/04/logo-chilemiel-black-300x144.png"
						width="125"
						height="75"
					/>
				</span>
			</Link>
			<div className="ml-auto">
				<strong className="mx-3">Alvaro Solano</strong>
				<Link to="/login">
					<button className="btn btn-warning rounded-pill">Login</button>
				</Link>
			</div>
		</nav>
	);
};
