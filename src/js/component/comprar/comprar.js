import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";
import { CardDeck, Card, Row, Col } from "react-bootstrap";
export const Comprar = () => {
	return (
		<div>
			<Row>
				<Col>
					<CardDeck>
						<Card>
							<Card.Img
								variant="top"
								src="https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aG9uZXl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
								width="400"
								height="400"
							/>
							<Card.Body>
								<Card.Title>Card title</Card.Title>
								<Card.Text>
									This is a wider card with supporting text below as a natural lead-in to additional
									content. This content is a little bit longer.
								</Card.Text>
							</Card.Body>
							<Card.Footer>
								<small className="text-muted">Last updated 3 mins ago</small>
							</Card.Footer>
						</Card>
						<Card>
							<Card.Img
								variant="top"
								src="https://images.unsplash.com/photo-1555035900-54c17f3bc1eb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8aG9uZXl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
								width="400"
								height="400"
							/>
							<Card.Body>
								<Card.Title>Card title</Card.Title>
								<Card.Text>
									This card has supporting text below as a natural lead-in to additional content.{" "}
								</Card.Text>
							</Card.Body>
							<Card.Footer>
								<small className="text-muted">Last updated 3 mins ago</small>
							</Card.Footer>
						</Card>
						<Card>
							<Card.Img
								variant="top"
								src="https://images.unsplash.com/photo-1586779161164-d89795b07b71?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80"
								width="400"
								height="400"
							/>
							<Card.Body>
								<Card.Title>Card title</Card.Title>
								<Card.Text>
									This is a wider card with supporting text below as a natural lead-in to additional
									content. This card has even longer content than the first to show that equal height
									action.
								</Card.Text>
							</Card.Body>
							<Card.Footer>
								<small className="text-muted">Last updated 3 mins ago</small>
							</Card.Footer>
						</Card>
					</CardDeck>
				</Col>
			</Row>
			<Row className="mt-3">
				<Col>
					<CardDeck>
						<Card>
							<Card.Img
								variant="top"
								src="https://images.unsplash.com/photo-1575666236466-92a020a3d22b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvbmV5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
								width="400"
								height="400"
							/>
							<Card.Body>
								<Card.Title>Card title</Card.Title>
								<Card.Text>
									This is a wider card with supporting text below as a natural lead-in to additional
									content. This content is a little bit longer.
								</Card.Text>
							</Card.Body>
							<Card.Footer>
								<small className="text-muted">Last updated 3 mins ago</small>
							</Card.Footer>
						</Card>
						<Card>
							<Card.Img
								variant="top"
								src="https://images.unsplash.com/photo-1518883027849-d57bd1849feb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nzl8fGhvbmV5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
								width="400"
								height="400"
							/>
							<Card.Body>
								<Card.Title>Card title</Card.Title>
								<Card.Text>
									This card has supporting text below as a natural lead-in to additional content.{" "}
								</Card.Text>
							</Card.Body>
							<Card.Footer>
								<small className="text-muted">Last updated 3 mins ago</small>
							</Card.Footer>
						</Card>
						<Card>
							<Card.Img
								variant="top"
								src="https://images.unsplash.com/photo-1580047546906-92e68dced5c9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODh8fGhvbmV5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
								width="400"
								height="400"
							/>
							<Card.Body>
								<Card.Title>Card title</Card.Title>
								<Card.Text>
									This is a wider card with supporting text below as a natural lead-in to additional
									content. This card has even longer content than the first to show that equal height
									action.
								</Card.Text>
							</Card.Body>
							<Card.Footer>
								<small className="text-muted">Last updated 3 mins ago</small>
							</Card.Footer>
						</Card>
					</CardDeck>
				</Col>
			</Row>
			<Row className="mt-3">
				<Col>
					<CardDeck>
						<Card>
							<Card.Img
								variant="top"
								src="https://images.unsplash.com/photo-1604344796994-11bf2bc5f0c0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTR8fGhvbmV5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
								width="400"
								height="400"
							/>
							<Card.Body>
								<Card.Title>Card title</Card.Title>
								<Card.Text>
									This is a wider card with supporting text below as a natural lead-in to additional
									content. This content is a little bit longer.
								</Card.Text>
							</Card.Body>
							<Card.Footer>
								<small className="text-muted">Last updated 3 mins ago</small>
							</Card.Footer>
						</Card>
						<Card>
							<Card.Img
								variant="top"
								src="https://images.unsplash.com/photo-1565206594704-0ee96fe6b62a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTEwfHxob25leXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
								width="400"
								height="400"
							/>
							<Card.Body>
								<Card.Title>Card title</Card.Title>
								<Card.Text>
									This card has supporting text below as a natural lead-in to additional content.{" "}
								</Card.Text>
							</Card.Body>
							<Card.Footer>
								<small className="text-muted">Last updated 3 mins ago</small>
							</Card.Footer>
						</Card>
						<Card>
							<Card.Img
								variant="top"
								src="https://images.unsplash.com/photo-1614179402165-b0ffc37c5494?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTE1fHxob25leXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
								width="400"
								height="400"
							/>
							<Card.Body>
								<Card.Title>Card title</Card.Title>
								<Card.Text>
									This is a wider card with supporting text below as a natural lead-in to additional
									content. This card has even longer content than the first to show that equal height
									action.
								</Card.Text>
							</Card.Body>
							<Card.Footer>
								<small className="text-muted">Last updated 3 mins ago</small>
							</Card.Footer>
						</Card>
					</CardDeck>
				</Col>
			</Row>
		</div>
	);
};
