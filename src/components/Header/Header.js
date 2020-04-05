import React, { Fragment, useEffect } from "react";
import { withRouter } from "react-router";
import connect from "react-redux";

import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Badge from "react-bootstrap/Badge";

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="primary"
      variant="dark"
      fixed="top"
    >
      <Container>
        <span>22</span>
      </Container>
    </Navbar>
  );
};

export default Header;
