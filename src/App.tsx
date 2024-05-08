import React from "react";
import { hot } from "react-hot-loader/root";
import { Router, Route, Switch } from "react-router-dom";

import Header from "components/Header";
import Home from "pages/Home";
import ServiceAApp from "components/ServiceAApp";
import ServiceBApp from "components/ServiceBApp";

import { History } from "history";

interface AppProps {
	history: History;
}

function App({ history }: AppProps) {
	return (
		<>
			<Router history={history}>
				<Header />
				<Switch>
					<Route path="/serviceA">
						<ServiceAApp />
					</Route>
					<Route path="/serviceB">
						<ServiceBApp />
					</Route>
					<Route path="/" component={Home} />
				</Switch>
			</Router>
		</>
	);
}

export default hot(App);
