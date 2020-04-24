import React from "react";
import { withRouter } from "react-router";
import { LinkContainer } from "react-router-bootstrap";

import { connect } from "react-redux";

import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import logo from "../../assets/logo.svg";
import shoping_cart from "../../assets/icons/shopping_cart.png";

const Header = ({ location, cart }) => {
  const { pathname } = location;

  function calcCartLength() {
    const sum = cart.cartProducts
      .map((p) => p.quantity)
      .reduce((a, b) => a + b, 0);
    return sum;
  }

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      sticky="top"
    >
      <Container>
        <Navbar.Brand href="/imba-eshop/home">
          <img src={logo} className="logo" alt="logo" />
        </Navbar.Brand>
        {/* ---------Mobile shoping cart------- */}
        <Link to="imba-eshop/cart" className="shoping_cart__mobile">
          <img src={shoping_cart} alt="" id="shoping_cart_mobile" />
          {calcCartLength() > 0 && (
            <div className="shopingcart-items-sum___mobile">
              <span id="calc-length__mobile">{calcCartLength()}</span>
            </div>
          )}
        </Link>
        {/* ---------Mobile shoping cart------- */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav className="nav-pages" activeKey={pathname}>
              {" "}
              <LinkContainer to="/imba-eshop/home">
                <Nav.Link>Главная</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/imba-eshop/products">
                <Nav.Link>Магазин</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/imba-eshop/contacts">
                <Nav.Link>Контакты</Nav.Link>
              </LinkContainer>
              <LinkContainer className="/header__delivery" to="/imba-eshop/delivery">
                <Nav.Link>Доставка</Nav.Link>
              </LinkContainer>
            </Nav>
            <LinkContainer to="/imba-eshop/cart" className="shoping_cart__desktop">
              <Nav.Link>
                <img src={shoping_cart} alt="" id="shoping_cart" />
                {calcCartLength() > 0 && (
                  <div className="shopingcart-items-sum">
                    <span id="calc-length">{calcCartLength()}</span>
                  </div>
                )}
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

export default connect((state) => ({ cart: state.cartReducer }))(
  withRouter(Header)
);
