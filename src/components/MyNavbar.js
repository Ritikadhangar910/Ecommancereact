import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../App.css";
import Cart from "./Cart";

const MyNavbar = () => {
  return (
    <Navbar
      defaultActiveKey="/"
      className="sticky-top navbar-expand-lg navbar-dark bg-dark"
    >
      <Container>
        <Nav className="mr-auto">
          <Nav.Item>
            <Nav.Link href="/" className="nav-link">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/store" className="nav-link">
              Store
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about" className="nav-link">
              About
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Cart />
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
