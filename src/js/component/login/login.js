import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";
import { Form, Button, Row, Col, Card, Alert } from "react-bootstrap";
export const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [clave, setClave] = useState("");
	//const [redirige, setRedirige] = useState("");
	const [alertFail, setAlertFail] = useState(false);

	const validar = () => {
		store.usuarios.map((item, index) => {
			if (item.email == email) {
				if (item.clave == clave) {
					actions.setLog(true);
					actions.setNombreActivo(item.nombre);
				}
			}
		});
	};
	return (
		<Row className="d-flex justify-content-center my-5">
			<Col className="col-5">
				<Alert variant="danger" show={alertFail} onClose={() => setAlertFail(false)} dismissible>
					<Alert.Heading>Hubo un error</Alert.Heading>
					<p>Las credenciales son incorrectas</p>
				</Alert>
				<div className="px-4 pt-2 pb-3 border border-dark rounded ">
					<span className="navbar-brand mb-0 h1 d-flex justify-content-center">
						<img
							src="https://chilemiel.cl/wp-content/uploads/2020/04/logo-chilemiel-black-300x144.png"
							width="125"
							height="75"
						/>
					</span>
					<Form>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type="email"
								placeholder="Enter email"
								onChange={e => setEmail(e.target.value)}
								value={email}
							/>
						</Form.Group>

						<Form.Group controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Password"
								onChange={e => setClave(e.target.value)}
								value={clave}
							/>
						</Form.Group>
						<div className="d-flex justify-content-between">
							<Link to={"/"}>
								<Button variant="primary" type="submit" onClick={validar}>
									Aceptar
								</Button>
							</Link>

							<Link to="/">
								<Button variant="danger">Cancelar</Button>
							</Link>
						</div>
					</Form>
				</div>
			</Col>
		</Row>
	);
};
