import React from "react";

function Home() {
	return (
		<>
			<h1>Welcome To The Shell App Home Page</h1>
			<p>Please browse one of our services</p>
			<ul>
				<li>
					<a href="/serviceA">Service A App</a>
				</li>
				<li>
					<a href="/serviceB">Service B App</a>
				</li>
			</ul>
		</>
	);
}

export default Home;
