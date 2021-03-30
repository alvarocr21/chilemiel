import React from "react";
import { Carousel } from "react-bootstrap";
export const Landing = () => (
	<div>
		<Carousel>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://images.unsplash.com/photo-1501261942928-5f1a1aec5fda?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyMzY0MTA5fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60"
					alt="First slide"
				/>
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://images.unsplash.com/photo-1503162235267-519716042c12?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXwyMzY0MTA5fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
					alt="Second slide"
				/>

				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://images.unsplash.com/photo-1440985890253-d024718e8e44?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8MjM2NDEwOXx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
					alt="Third slide"
				/>

				<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	</div>
);
