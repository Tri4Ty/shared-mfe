import Header from "components/Header";
import React from "react";

import IAm from "utilities/IAm";

function Home() {
	return (
		<>
			<Header />
			<h2>Welcome to our home page</h2>
			<p>Imported from utilities:</p>
			<IAm name="Service A" />
		</>
	);
}

export default Home;
