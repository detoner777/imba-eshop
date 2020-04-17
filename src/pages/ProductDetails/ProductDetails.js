/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Redirect } from "react-router-dom";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
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

  //DidMount
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

  function renderTooltip(props) {
    return (
      <Tooltip id="button-tooltip" {...props}>
        Имбовый стикерпак в подарок!
      </Tooltip>
    );
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
      <div className="products-details__root">
        <div className="products-details__wrapper">
          <div className="row no-gutters">
            <aside className="col-sm-5 border-right">
              <img
                src={require(`../../static/products/${product.image}`)}
                alt="picture"
              />
            </aside>
            <aside className="col-sm-7">
              <article className="p-5">
                <h3 className="product-details__title mb-3">{product.name}</h3>
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 150, hide: 300 }}
                  overlay={renderTooltip}
                >
                  <div className="product-details__label">
                    <span>+&nbsp;</span>

                    <div className="product-details__img">
                      <img
                        src={require(`../../assets/prod-details/gift-icon.svg`)}
                        alt="gift-icon"
                      ></img>
                    </div>
                  </div>
                </OverlayTrigger>
                <div className="mb-3">
                  <var className="price h3 text-success">
                    <span className="num">
                      {product.price.toFixed(0)}
                      {` `}
                    </span>
                    <span className="currency">₽</span>
                  </var>
                </div>
                <dl>
                  <dt>Описание</dt>
                  <dd>
                    <p>{product.description}</p>
                  </dd>
                </dl>
                <dl className="row">
                  <dt className="col-sm-3">Код</dt>
                  <dd className="col-sm-9">{product.modelNum}</dd>
                  <dt className="col-sm-3">Цвет</dt>
                  <dd className={`product-color-${product.color}`}></dd>
                </dl>
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

                <button
                  onClick={toggleAddProduct}
                  className={
                    !isAdded()
                      ? "btn  btn-outline-primary"
                      : "btn  btn-outline-danger"
                  }
                >
                  {!isAdded() ? "В КОРЗИНУ" : "УБРАТЬ"}
                </button>
              </article>
            </aside>
          </div>
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
