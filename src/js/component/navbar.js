import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Nav, DropdownButton, Dropdown } from "react-bootstrap";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	let ocultarLogout = "";
	let ocultarLogin = "";
	let login = "";

	if (!store.logeado) {
		ocultarLogout = "d-none";
		ocultarLogin = "";
		login = "Login";
	} else {
		login = "Logout";
		ocultarLogin = "d-none";
		ocultarLogout = "";
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
			<div className={`mx-3 ${ocultarLogout}`}>
				<Link to="/">
					<span className="navbar-brand mb-0 h1 mr-3">Inicio</span>
				</Link>
				<Link to="/todolist">
					<span className="navbar-brand mb-0 h1 mr-3">Tareas</span>
				</Link>
				<Link to="/comprar">
					<span className="navbar-brand mb-0 h1 mr-3">Comprar</span>
				</Link>
				<Link to="/vendedor">
					<span className="navbar-brand mb-0 h1 mr-3">Vendedor</span>
				</Link>
			</div>

			<div className="ml-auto d-flex inline">
				<DropdownButton
					className={`mx-3 ${ocultarLogout}`}
					id="dropdown-basic-button"
					title={`Productos ${store.carrito.length}`}
					variant="success">
					{store.carrito.map((item, index) => {
						return (
							<Dropdown.Item key={index} href="#/action-1" onClick={() => actions.setCompras(item)}>
								<i className="fas fa-trash-alt" /> {item}
							</Dropdown.Item>
						);
					})}
				</DropdownButton>
				<strong className={`mx-3 ${ocultarLogout}`}>{store.nombreActivo}</strong>
				<Link to="/">
					<button
						className={`btn btn-warning rounded-pill ${ocultarLogout} `}
						onClick={() => actions.setLog(false)}>
						{login}
					</button>
				</Link>
				<Link to="/login">
					<button className={`btn btn-warning rounded-pill ${ocultarLogin} `}>{login}</button>
				</Link>
			</div>
		</nav>
	);
};
