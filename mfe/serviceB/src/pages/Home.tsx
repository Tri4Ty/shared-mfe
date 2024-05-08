import React from "react";

import IAm from "utilities/IAm";

function Home() {
	return (
		<>
			<h2>Welcome to our home page</h2>
			<p>Imported from utilities:</p>
			<IAm name="Service B" />
		</>
	);
}

export default Home;
