import React, { useState, useRef, Fragment } from "react";
import { connect } from "react-redux";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

import { Link } from "react-router-dom";

import {
  addProductToCart,
  removeProductFromCart,
} from "../../store/actions/cart";

const Product = ({
  product,
  addProductToCart,
  removeProductFromCart,
  cart,
}) => {
  const { id, name, price, image, shortDescription, description } = product;
  const [isLoading, setIsLoading] = useState(true);
  const counter = useRef(0);

  function imageLoaded() {
    counter.current += 1;
    if (counter.current >= 1) {
      setIsLoading(false);
    }
  }

  function toggleAddProduct() {
    if (!isAdded()) {
      addProductToCart(product);
    } else {
      removeProductFromCart(product);
    }
    //console.log(cart.cartProducts);
  }

  function isAdded() {
    const isAdded =
      cart.cartProducts.length > 0 &&
      cart.cartProducts.find((p) => p.product.id === product.id);
    return isAdded;
  }

  return (
    <Fragment>
      <Col
        xs={12}
        sm={6}
        lg={4}
        xl={3}
        key={0}
        className="container"
        style={{ display: isLoading ? "block" : "none" }}
      >
        <div className="row justify-content-center align-self-center h-300">
          <Spinner animation="border" className="align-self-center" />
        </div>
      </Col>

      <Col
        xs={12}
        sm={6}
        xl={3}
        lg={4}
        className="mb-3"
        style={{ display: isLoading ? "none" : "block" }}
      >
        <Card className="product-card">
          <Link to={`/product-details/${id}`}>
            <Card.Img
              className="product-img"
              variant="top"
              src={require(`../../static/products/${image}`)}
              alt="Product"
              onLoad={imageLoaded}
            />
          </Link>
          <Card.Body>
            <h4 className="card-title">{name}</h4>
            <h6 className="card-subtitle mb-2 text-muted">
              Description: {shortDescription}
            </h6>
            <Card.Text>{description}</Card.Text>

            <div className="buy d-flex justify-content-between align-items-center">
              <div className="price text-success">
                <h5 className="mt-4">${price.toFixed(2)}</h5>
              </div>
              <Button
                variant={!isAdded() ? "outline-primary" : "danger"}
                onClick={toggleAddProduct}
                className="add-to-cart mt-3"
              >
                <i className="fa fa-shopping-cart"></i>{" "}
                {!isAdded() ? "Add to Cart" : "Added to Cart"}
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Fragment>
  );
};

export default connect(
  (state) => ({
    cart: state.cartReducer,
  }),
  {
    addProductToCart,
    removeProductFromCart,
  }
)(Product);