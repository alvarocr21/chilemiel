import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";
import { CardDeck, Card, Row, Col } from "react-bootstrap";
export const Comprar = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<Row>
				{store.productos.map((item, index) => {
					return (
						<Col xs={4} key={index} className="mt-3">
							<CardDeck>
								<Card>
									<Card.Img variant="top" src={item.urlImagen} width="400" height="400" />
									<Card.Body>
										<Card.Title>{item.nombre}</Card.Title>
										<Card.Text>
											<ul>
												<li>Detalle: {item.detalle}</li>
												<li>Precio: ${item.precio}</li>
											</ul>
										</Card.Text>
									</Card.Body>
									<Card.Footer>
										<button
											className="btn btn-success"
											onClick={() => actions.setCarrito(item.nombre)}>
											Agregar al carro
										</button>
									</Card.Footer>
								</Card>
							</CardDeck>
						</Col>
					);
				})}
			</Row>
		</div>
	);
};
