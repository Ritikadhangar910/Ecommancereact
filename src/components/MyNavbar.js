import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../App.css";
import Cart from "./Cart";
import { NavLink } from "react-router-dom";

const MyNavbar = () => {
  return (
    <Navbar className="sticky-top navbar navbar-expand-lg navbar-dark bg-dark">
      <Container>
        <Nav className="mr-auto">
          <Nav.Item>
            <NavLink to="/" exact className="nav-link">
              Home
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/store" className="nav-link">
              Store
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </Nav.Item>
        </Nav>
        <Cart />
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
