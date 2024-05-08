import React from "react";
import { render } from "react-dom";
import { createBrowserHistory } from "history";

import App from "./App";

// Isolation Mode
const history = createBrowserHistory();

const rootEl = document.getElementById("shell-app");

if (rootEl) {
	render(
		<React.StrictMode>
			<App history={history} />
		</React.StrictMode>,
		rootEl
	);
}
