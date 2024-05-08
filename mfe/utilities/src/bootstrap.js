import React from "react";
import { render } from "react-dom";
import { createBrowserHistory, createMemoryHistory } from "history";

import App from "./App";

// Isolation Mode
const rootEl = document.getElementById("utilities-app");

const history = createBrowserHistory();

if (rootEl) {
	render(
		<React.StrictMode>
			<App history={history} hosted={false} />
		</React.StrictMode>,
		rootEl
	);
}