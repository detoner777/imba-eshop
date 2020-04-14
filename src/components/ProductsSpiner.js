import React, { Fragment } from "react";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

const ProductsSpiner = () => {
  return (
    <Col
      xs={12}
      sm={6}
      xl={3}
      lg={4}
      className="mb-3"
      style={{ display: "block" }}
    >
      <Card className="product-card">
        <Spinner />
      </Card>
    </Col>
  );
};

export default ProductsSpiner;
