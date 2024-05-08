import React from "react";
import { styled } from "@SolaceDev/maas-react-components";
import { Link } from "react-router-dom";

const Container = styled("div")({
	display: "flex",
	justifyContent: "space-between"
});

function Header() {
	return (
		<Container>
			<p style={{ padding: 0, margin: 0, fontWeight: "bold" }}>Shell App</p>
			<span>
				<Link to="/">Home</Link> | <Link to="/serviceA">Service A</Link> | <Link to="/serviceB">Service B</Link>
			</span>
		</Container>
	);
}

export default Header;
