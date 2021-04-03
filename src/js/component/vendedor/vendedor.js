import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";
import { Form, Button, Row, Col, Card, Alert, Image, Modal } from "react-bootstrap";
import { ModalVendedor } from "./modalVendedor";
export const Vendedor = () => {
	const { store, actions } = useContext(Context);
	const [modalShow, setModalShow] = React.useState(false);
	return (
		<div>
			<Row className="d-flex justify-content-center">
				{store.vendedores.map((item, index) => {
					return (
						<Card style={{ width: "18rem" }} className="mx-3" key={index}>
							<Image src={item.urlImagen} with="200" height="300" roundedCircle />
							<Card.Body>
								<Card.Title>{item.nombre}</Card.Title>

								<Button
									variant="primary"
									onClick={() => {
										setModalShow(true);
										actions.setVendedor(item);
									}}>
									Conóceme
								</Button>
							</Card.Body>
						</Card>
					);
				})}
			</Row>
			<ModalVendedor show={modalShow} onHide={() => setModalShow(false)} />
		</div>
	);
};
