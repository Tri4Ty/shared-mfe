import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@SolaceDev/maas-react-components";

const NavList = styled("ul")({
	listStyle: "none",
	margin: 0,
	padding: 0
});

const NavItem = styled("li")({
	display: "inline",
	marginRight: "10px"
});

function Header() {
	return (
		<>
			<h1>Welcome to Service B App</h1>
			<NavList>
				<NavItem>
					<Link to="/serviceB">Home</Link>
				</NavItem>
				<NavItem style={{ display: "inline" }}>
					<Link to="/serviceB/summary">Summary</Link>
				</NavItem>
				<NavItem style={{ display: "inline" }}>
					<Link to="/serviceB/details">Details</Link>
				</NavItem>
			</NavList>
		</>
	);
}

export default Header;
