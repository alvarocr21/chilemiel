import React from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
export const Login = () => (
	<Row className="d-flex justify-content-center my-5">
		<Col className="col-5">
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
						<Form.Control type="email" placeholder="Enter email" />
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>
					<div className="d-flex justify-content-between">
						<Link to="/todolist">
							<Button variant="primary" type="submit">
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
