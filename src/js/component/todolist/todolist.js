import React from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col, ListGroup, InputGroup, FormControl, OverlayTrigger, Tooltip } from "react-bootstrap";
export const Todolist = () => (
	<Row className="d-flex justify-content-center my-5">
		<Col className="col-8">
			<div className="px-4 pt-2 pb-3 border border-dark rounded ">
				<InputGroup className="mb-3">
					<FormControl
						placeholder="Agregue una tarea"
						aria-label="Recipient's username"
						aria-describedby="basic-addon2"
					/>
					<InputGroup.Append>
						<Button variant="outline-primary">Agregar</Button>
					</InputGroup.Append>
				</InputGroup>
				<ListGroup>
					<ListGroup.Item>
						Cras justo odio
						<OverlayTrigger
							key="top"
							placement="top"
							overlay={<Tooltip id="tooltip-top">Eliminar</Tooltip>}>
							<button type="button" className="btn btn-danger btn-sm float-right">
								<i className="fas fa-trash-alt" />
							</button>
						</OverlayTrigger>
						<OverlayTrigger key="top" placement="top" overlay={<Tooltip id="tooltip-top">Editar</Tooltip>}>
							<button type="button" className="btn btn-warning btn-sm float-right mx-1">
								<i className="fas fa-edit" />
							</button>
						</OverlayTrigger>
						<OverlayTrigger
							key="top"
							placement="top"
							overlay={<Tooltip id="tooltip-top">Terminar</Tooltip>}>
							<button type="button" className="btn btn-success btn-sm float-right">
								<i className="fas fa-check" />
							</button>
						</OverlayTrigger>
					</ListGroup.Item>

					<ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
					<ListGroup.Item>Morbi leo risus</ListGroup.Item>
					<ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
					<ListGroup.Item>Vestibulum at eros</ListGroup.Item>
				</ListGroup>
			</div>
		</Col>
	</Row>
);
