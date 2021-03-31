import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Nav } from "react-bootstrap";
export const Navbar = () => {
	const { store, actions } = useContext(Context);
	let ocultar = "";
	let login = "";
	if (!store.logeado) {
		ocultar = "d-none";
		login = "Login";
	} else {
		login = "Logout";
	}
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 mr-3">
					<img
						src="https://chilemiel.cl/wp-content/uploads/2020/04/logo-chilemiel-black-300x144.png"
						width="125"
						height="75"
					/>
				</span>
			</Link>

			<Nav className={`mr-auto ${ocultar}`}>
				<Nav.Link className="text-dark">Home</Nav.Link>
				<Nav.Link className="text-dark">Comprar</Nav.Link>
				<Nav.Link className="text-dark">Vendedor</Nav.Link>
			</Nav>

			<div className="ml-auto">
				<strong className={`mx-3 ${ocultar}`}>Alvaro Solano</strong>
				<Link to="/login">
					<button className="btn btn-warning rounded-pill">{login}</button>
				</Link>
			</div>
		</nav>
	);
};
