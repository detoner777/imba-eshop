import React, { Fragment, useEffect } from "react";
import { withRouter } from "react-router";
import { LinkContainer } from "react-router-bootstrap";

import connect from "react-redux";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import logo from "../../assets/logo.svg";
import shoping_cart from "../../assets/icons/shopping_cart.png";

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      sticky="top"
    >
      <Container>
        <Navbar.Brand href="/home">
          <img src={logo} className="logo" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav className="nav-pages">
              {" "}
              <Nav.Link href="/home">Главная</Nav.Link>
              <Nav.Link href="/products">Магазин</Nav.Link>
              <Nav.Link href="/victory">Розыгрыш!</Nav.Link>
              <Nav.Link href="/contacts">Контакты</Nav.Link>
            </Nav>
            <LinkContainer to="/cart">
              <Nav.Link>
                <img src={shoping_cart} alt="shoping-cart" id="shoping_cart" />{" "}
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    // <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" sticky="top">
    //   <Container>
    //     <Navbar.Brand href="#home">
    //       <img src={logo} className="logo" alt="logo" />
    //     </Navbar.Brand>
    //     <Nav.Link href="/home">Главная</Nav.Link>
    //     <Nav.Link href="/products">Магазин</Nav.Link>
    //     <Nav.Link href="#features">Розыгрыш!</Nav.Link>
    //     <Nav.Link href="#features">Контакты</Nav.Link>

    //     <Nav.Link>
    //       <i className="fa fa-shopping-cart"></i> Cart{" "}
    //     </Nav.Link>
    //   </Container>
    // </Navbar>
  );
};

export default Header;
