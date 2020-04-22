import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroller";

import Spinner from "react-bootstrap/Spinner";

import Product from "../../components/Product";
import ProductsHead from "./components/ProductsHeader";

import { loadProducts } from "../../store/actions/products";
import { setPageToLoad } from "../../store/actions/header";

import { config } from "../../services/config";

const Products = ({
  products: { isLoading, products, hasMoreItems, error },
  loadProducts,
  header,
  setPageToLoad,
}) => {
  // did mount
  useEffect(() => {
    loadProducts(
      {
        page: { index: 0, size: config.pageSize },
        sort: { key: "none", direction: "asc" },
        filter: { brand: "none", color: "none" },
      },
      false
    );
  }, []);

  function fetchMoreData(pageToLoad) {
    // console.log('pageToLoad: ', pageToLoad);
    if (pageToLoad > 0) {
      loadProducts(
        {
          page: {
            index: (header.pageToLoad + 1) * config.pageSize,
            size: config.pageSize,
          },
          sort: { ...header.sortBy },
          filter: { ...header.filterBy },
        },
        true,
        () => setPageToLoad(header.pageToLoad + 1) // this way or race loop!!!
      );
      // console.log('header.pageToLoad: ', header.pageToLoad);
    }
  }

  // console.log(products);
  if (error) return <Redirect to={"/error"} />;
  if (isLoading)
    return <Spinner animation="border" className="align-self-center" />;

  return (
    <div className="products-wrapper">
      <ProductsHead />
      <div className="container ">
        <InfiniteScroll
          className="row"
          pageStart={0}
          loadMore={fetchMoreData}
          hasMore={hasMoreItems}
          initialLoad={false}
        >
          {products.map((product, i) => (
            <Product product={product} key={i} />
          ))}
        </InfiniteScroll>
        {/* {!error && !hasMoreItems && (
        <Row className="mb-3">
          <Col>
            <h4 className="text-center">No more products</h4>
          </Col>
        </Row>
      )} */}
      </div>
    </div>
  );
};

export default connect(
  (state) => ({
    products: state.productsReducer,
    header: state.headerReducer,
  }),
  { loadProducts, setPageToLoad }
)(Products);
