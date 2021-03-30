import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Container } from "react-bootstrap";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";

/**Componentes */
import { Landing } from "./component/landingPage/landing";
import { Login } from "./component/login/login";
import { Todolist } from "./component/todolist/todolist";
/** */

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Container>
						<Switch>
							<Route exact path="/">
								<Landing />
							</Route>
							<Route exact path="/login">
								<Login />
							</Route>
							<Route exact path="/todolist">
								<Todolist />
							</Route>
							<Route exact path="/single/:theid">
								<Single />
							</Route>
							<Route>
								<h1>Not found!</h1>
							</Route>
						</Switch>
					</Container>

					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
