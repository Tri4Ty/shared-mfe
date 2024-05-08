import React from "react";
import { hot } from "react-hot-loader/root";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { History } from "history";

import Summary from "pages/Summary";
import Details from "pages/Details";
import Home from "pages/Home";
import Header from "components/Header";

interface AppProps {
	history: History;
	hosted: boolean;
}

export function App({ history, hosted }: AppProps) {
	return (
		<>
			<Router history={history}>
				<Header />
				<Switch>
					<Route path="/serviceB/summary" component={Summary} />
					<Route path="/serviceB/details" component={Details} />
					<Route path="/serviceB" component={Home} />
					{!hosted && <Redirect to="/serviceB" />}
				</Switch>
			</Router>
		</>
	);
}

export default hot(App);
