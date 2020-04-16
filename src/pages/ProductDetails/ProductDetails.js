/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Redirect } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";

import Spinner from "react-bootstrap/Spinner";

import { loadProduct } from "../../store/actions/productDetails";
import { showToast, hideToast } from "../../store/actions/toast";

import {
  addProductToCart,
  removeProductFromCart,
} from "../../store/actions/cart";

const ProductDetails = ({
  productDetails,
  loadProduct,
  match,
  addProductToCart,
  removeProductFromCart,
  cart,
  showToast,
}) => {
  const { product, isLoading, error } = productDetails;

  //did mount
  useEffect(() => {
    loadProduct(match.params.id);
  }, []);

  function toggleAddProduct() {
    if (!isAdded()) {
      addProductToCart(product);
      showToast({
        title: "Notification",
        text: "Товар добавлен в корзину.",
      });
    } else {
      removeProductFromCart(product);
      showToast({
        title: "Notification",
        text: "Товар убрали с корзины.",
      });
    }
  }

  function isAdded() {
    const isAdded =
      cart.cartProducts.length > 0 &&
      cart.cartProducts.find((p) => p.product.id === product.id);
    console.log(`isAdded = ${isAdded}`);
    return isAdded;
  }

  if (error) return <Redirect to={"/error"} />;
  if (isLoading) return <Spinner />;
  console.log(productDetails);

  return (
    product && (
      <div className="card mb-3">
        <div className="row no-gutters">
          <aside className="col-sm-5 border-right">
            <div>
              <img
                className="main-img d-md-none"
                src={require(`../../static/products/${product.image}`)}
                alt="picture"
              />
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: product.shortDescription,
                    isFluidWidth: true,
                    src: require(`../../static/products/${product.image}`),
                  },
                  largeImage: {
                    src: require(`../../static/products/${product.image}`),
                    width: 1200,
                    height: 1200,
                  },
                  enlargedImageContainerStyle: {
                    zIndex: 9,
                    backgroundColor: "white",
                    objectFit: "cover",
                  },
                  enlargedImageContainerDimensions: {
                    width: "150%",
                    height: "120%",
                  },
                  className: "d-none d-md-block ",
                }}
              />
            </div>
          </aside>
          <aside className="col-sm-7">
            <article className="p-5">
              <h3 className="title mb-3">{product.name}</h3>

              <div className="mb-3">
                <var className="price h3 text-success">
                  <span className="currency">US $</span>
                  <span className="num">{product.price.toFixed(2)}</span>
                </var>
              </div>
              {/* <dl>
                <dt>Description</dt>
                <dd>
                  <p>{product.description}</p>
                </dd>
              </dl>
              <dl className="row">
                <dt className="col-sm-3">Model#</dt>
                <dd className="col-sm-9">{product.modelNum}</dd>

                <dt className="col-sm-3">Color</dt>
                <dd className="col-sm-9">{product.color}</dd>

                <dt className="col-sm-3">Delivery</dt>
                <dd className="col-sm-9">{product.delivery}</dd>
              </dl> */}

              <hr />
              {/* <div className="row">
                <div className="col-sm-5">
                  <dl className="dlist-inline">
                    <dt>Weight: </dt>
                    <dd className="pl-2">
                      <span className="form-check-label">{`${product.weight} g`}</span>
                    </dd>
                  </dl>
                </div>
                <div className="col-sm-7">
                  <dl className="dlist-inline">
                    <dt>Size: </dt>
                    <dd>
                      <span className="form-check-label">{`${product.size} cm`}</span>
                    </dd>
                  </dl>
                </div>
              </div> */}
              <hr />
              <button
                onClick={toggleAddProduct}
                className={
                  !isAdded()
                    ? "btn  btn-outline-primary"
                    : "btn  btn-outline-danger"
                }
              >
                <i className="fa fa-shopping-cart"></i>{" "}
                {!isAdded() ? "Add to Cart" : "Added to Cart"}
              </button>
            </article>
          </aside>
        </div>
      </div>
    )
  );
};

export default connect(
  (state) => ({
    productDetails: state.productDetailsReducer,
    cart: state.cartReducer,
  }),
  {
    loadProduct,
    addProductToCart,
    removeProductFromCart,
    showToast,
    hideToast,
  }
)(withRouter(ProductDetails));
