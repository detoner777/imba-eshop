import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Container from "react-bootstrap/Container";

import Header from "./components/Header";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Container>
        <h1>1213</h1>
      </Container>
    </Fragment>
  );
};

export default App;
