import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";

const Header = () => {
	return (
		<>
			<Navbar bg="dark" data-bs-theme="dark" className="py-3">
				<Container>
					<Navbar.Brand href="#home">Camelid</Navbar.Brand>
					<Nav className="me-right">
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive ? "m-2 active" : "m-2 not-active"
							}
						>
							Home
						</NavLink>
						<NavLink
							to="/contact"
							className={({ isActive }) =>
								isActive ? "m-2 active" : "m-2 not-active"
							}
						>
							Contact Us
						</NavLink>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
};

export default Header;
