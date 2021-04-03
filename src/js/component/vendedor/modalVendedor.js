import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";
import { Form, Button, Row, Col, Card, Alert, Image, Modal } from "react-bootstrap";
export const ModalVendedor = props => {
	const { store, actions } = useContext(Context);
	const [modalShow, setModalShow] = React.useState(false);
	return (
		<Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">{store.vendedor.nombre}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Row>
					<Col xs={6}>
						{" "}
						<Image src={store.vendedor.urlImagen} rounded with="300" height="500" />
					</Col>
					<Col>
						<ul>
							<li>Fecha Ingreso: {store.vendedor.ingreso}</li>
							<li>Detalle: {store.vendedor.detalle}</li>
						</ul>
					</Col>
				</Row>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Cerrar</Button>
			</Modal.Footer>
		</Modal>
	);
};
