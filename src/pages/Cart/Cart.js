import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import trash from "../../assets/icons/trash.png";
import korzina from "../../assets/icons/korzina.svg";

import Row from "react-bootstrap/Row";

import {
  addProductToCart,
  removeProductsFromCart,
  removeProductFromCart,
} from "../../store/actions/cart";

const Cart = ({
  cart: { cartProducts },
  addProductToCart,
  removeProductsFromCart,
  removeProductFromCart,
}) => {
  return (
    <Fragment>
      {cartProducts.length === 0 ? (
        <div className="justify-content-center shopping-cart__noproducts">
          <h3>Ваша корзина пуста</h3>
          <p>Самое время добавить в нее что-нибудь</p>
          <img src={korzina} alt="korzina" />
          <Link to={"/products"} className="btn-green redirect-products">
            Перейти к выбору
          </Link>
        </div>
      ) : (
        <Fragment>
          <div className="card shopping-cart">
            <div className="card-header">
              {/* <img src={shoping_cart} className="cart-shoping-img"></img> */}
              КОРЗИНА
              <div className="clearfix"></div>
            </div>
            <div className="card-body">
              {cartProducts.map(({ product, quantity }, i) => (
                <Fragment key={i}>
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-2 text-center">
                      <Link to={`/product-details/${product.id}`}>
                        <img
                          className="img-responsive cart-img-obj-fit"
                          src={require(`../../static/products/${product.image}`)}
                          alt="prewiew"
                          width="120"
                          height="120"
                        />
                      </Link>
                    </div>
                    <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
                      <h4 className="product-name">{product.name}</h4>
                      <p>{product.description}</p>
                    </div>
                    <div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
                      <div
                        className="col-3 col-sm-3 col-md-6 text-md-right"
                        style={{ paddingTop: 5 }}
                      >
                        <h5>
                          <strong>${product.price.toFixed(0)}</strong>
                        </h5>
                      </div>
                      <div className="col-4 col-sm-4 col-md-4">
                        <div className="quantity">
                          <button
                            onClick={() => removeProductFromCart(product)}
                            className="minus"
                          >
                            -
                          </button>
                          <span className="quantity-number">{quantity}</span>
                          <button
                            onClick={() => addProductToCart(product)}
                            className="plus"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="col-2 col-sm-2 col-md-2 text-right">
                        <button
                          onClick={() => removeProductsFromCart(product)}
                          type="button"
                          className="btn btn-outline-danger btn-xs"
                        >
                          <img
                            src={trash}
                            className="cart-trash-img"
                            alt="delete"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  <hr />
                </Fragment>
              ))}

              <div className="pull-right">
                <Link to={"/products"}>
                  <button className="btn btn-outline-success pull-right">
                    Перейти к выбору
                  </button>
                </Link>
              </div>
            </div>
            <div className="card-footer">
              {/* <div className="coupon col-md-5 col-sm-5 no-padding-left pull-left">
                <div className="row">
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="cupone code"
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="submit"
                      className="btn btn-default"
                      value="Use cupone"
                    />
                  </div>
                </div>
              </div> */}
              <div className="pull-left cart-footer" style={{ margin: 10 }}>
                <a href="" className="btn btn-success pull-right">
                  ОФОРМИТЬ ЗАКАЗ
                </a>
                <div className="total-price" style={{ margin: 5 }}>
                  <span>Всего: </span>
                  <b>
                    $
                    {cartProducts
                      .map((p) => p.product.price * p.quantity)
                      .reduce((a, b) => a + b, 0)
                      .toFixed(0)}
                  </b>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default connect(
  (state) => ({
    cart: state.cartReducer,
  }),
  { addProductToCart, removeProductFromCart, removeProductsFromCart }
)(Cart);
