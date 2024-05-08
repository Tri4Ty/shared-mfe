import React from "react";
import { hot } from "react-hot-loader/root";

import IAm from "components/IAm";

export function App() {
	return (
		<>
			<h1>Utilities</h1>
			<p>Here's a list of available utilities:</p>
			<hr />
			"I AM" Component:
			<IAm name="The Utilities MFE" />
			<hr />
		</>
	);
}

export default hot(App);
