import React from "react";
import { hot } from "react-hot-loader/root";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { History } from "history";

import Summary from "pages/Summary";
import Details from "pages/Details";
import Home from "pages/Home";

interface AppProps {
	history: History;
	hosted: boolean;
}

export function App({ history, hosted }: AppProps) {
	return (
		<>
			<Router history={history}>
				<Switch>
					<Route path="/serviceA/summary" component={Summary} />
					<Route path="/serviceA/details" component={Details} />
					<Route path="/serviceA" component={Home} />
					{!hosted && <Redirect to="/serviceA" />}
				</Switch>
			</Router>
		</>
	);
}

export default hot(App);
