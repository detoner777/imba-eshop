import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Container from "react-bootstrap/Container";

import Header from "./components/Header";
import Home from "./pages/Home";

const App = () => {
  return (
    <Fragment>
      <Header />

      <Home />
    </Fragment>
  );
};

export default App;
