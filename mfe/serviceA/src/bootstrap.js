import React from "react";
import { render } from "react-dom";
import { createBrowserHistory, createMemoryHistory } from "history";

import App from "./App";

function bootstrap(element, props) {
	const { initalPathname, onNavigate } = props;

	const history = createMemoryHistory({
		initialEntries: [initalPathname]
	});
	history.listen(onNavigate);

	render(
		<React.StrictMode>
			<App history={history} hosted={true} />
		</React.StrictMode>,
		element
	);

	return {
		// The following functions are passed back to the Container so it may communicate with the MFE
		onContainerNavigate({ pathname: nextPathname }) {
			const { pathname } = history.location;
			if (nextPathname !== pathname) {
				history.push({ pathname: nextPathname });
			}
		}
	};
}

// Isolation Mode
const rootEl = document.getElementById("serviceA-app");

const history = createBrowserHistory();

if (rootEl) {
	render(
		<React.StrictMode>
			<App history={history} hosted={false} />
		</React.StrictMode>,
		rootEl
	);
}

export { bootstrap };
