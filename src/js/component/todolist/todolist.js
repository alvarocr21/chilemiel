import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col, ListGroup, InputGroup, FormControl, OverlayTrigger, Tooltip, Alert } from "react-bootstrap";
export const Todolist = () => {
	const [tarea, setTarea] = useState("");
	const [tareas, setTareas] = useState([]);
	const [hechas, setHechas] = useState([]);
	const [alertFail, setAlertFail] = useState(false);
	const [alertPass, setAlertPass] = useState(false);

	const validaTarea = () => {
		if (tarea === "") {
			setAlertFail(true);
		} else {
			setTareas([
				...tareas,
				{
					estado: false,
					nombre: tarea
				}
			]);

			setAlertPass(true);
			setTarea("");
		}
	};

	const eliminaTarea = indice => {
		let newList = tareas;
		newList.splice(indice, 1);
		setTareas([...newList]);
	};

	const cambiaHechas = indice => {
		let newList = tareas;
		setHechas([
			...hechas,
			{
				estado: true,
				nombre: newList[indice].nombre
			}
		]);

		newList.splice(indice, 1);
		setTareas([...newList]);
	};

	const reactivar = indice => {
		let newList = hechas;
		setTareas([
			...tareas,
			{
				estado: false,
				nombre: newList[indice].nombre
			}
		]);

		newList.splice(indice, 1);
		setHechas([...newList]);
	};

	return (
		<Row className="d-flex justify-content-center my-5">
			<Col>
				<Row className="d-block">
					<Col className="col-12 text-center">
						<Alert variant="danger" show={alertFail} onClose={() => setAlertFail(false)} dismissible>
							<Alert.Heading>Hubo un error</Alert.Heading>
							<p>Debe ingresar algún valor para agregar la tarea</p>
						</Alert>
						<Alert variant="success" show={alertPass} onClose={() => setAlertPass(false)} dismissible>
							<Alert.Heading>Excelente!</Alert.Heading>
							<p>Tarea agregada satisfactoriamente</p>
						</Alert>
					</Col>
				</Row>
				<Row>
					<Col className="col-12">
						<h2>TAREAS</h2>
						<div className="px-4 pt-2 pb-3 border border-dark rounded mb-4">
							<InputGroup className="mb-3">
								<FormControl
									placeholder="Agregue una tarea"
									aria-label="Agregue una tarea"
									aria-describedby="basic-addon2"
									onChange={e => setTarea(e.target.value)}
									value={tarea}
								/>

								<InputGroup.Append>
									<Button variant="outline-primary" onClick={validaTarea}>
										Agregar
									</Button>
								</InputGroup.Append>
							</InputGroup>
							<ListGroup>
								{tareas.map((item, index) => {
									return (
										<ListGroup.Item key={index}>
											{item.nombre}
											<OverlayTrigger
												key="Eliminar"
												placement="top"
												overlay={<Tooltip id="tooltip-top">Eliminar</Tooltip>}>
												<button
													type="button"
													className="btn btn-danger btn-sm float-right"
													onClick={() => eliminaTarea(index)}>
													<i className="fas fa-trash-alt" />
												</button>
											</OverlayTrigger>
											<OverlayTrigger
												key="Terminar"
												placement="top"
												overlay={<Tooltip id="tooltip-top">Terminar</Tooltip>}>
												<button
													type="button"
													className="btn btn-warning btn-sm float-right mr-1"
													onClick={() => cambiaHechas(index)}>
													<i className="fas fa-check" />
												</button>
											</OverlayTrigger>
										</ListGroup.Item>
									);
								})}
							</ListGroup>
						</div>

						<h2>Hechas</h2>
						<div className="px-4 pt-2 pb-3 border border-dark rounded ">
							<ListGroup>
								{hechas.map((item, index) => {
									return (
										<ListGroup.Item key={index}>
											{item.nombre}
											<OverlayTrigger
												key="Rehacer"
												placement="top"
												overlay={<Tooltip id="tooltip-top">Rehacer</Tooltip>}>
												<button
													type="button"
													className="btn btn-success btn-sm float-right"
													onClick={() => reactivar(index)}>
													<i className="fas fa-recycle" />
												</button>
											</OverlayTrigger>
										</ListGroup.Item>
									);
								})}
							</ListGroup>
						</div>
					</Col>
				</Row>
			</Col>
		</Row>
	);
};
