import React from "react";
import { Link } from "react-router-dom";

const ProductsHeader = () => {
  return (
    <>
      <div className="products-header">
        <div className="products-header-wrapper">
          <p>Купи комбо</p>
          <p>и ВЫИГРАЙ CYBERPUNK 2077 </p>
          <Link to="/cart" className="index-header__btn">
            КУПИТЬ КОМБО
          </Link>
        </div>
      </div>
      <div className="products-header-foot"></div>
    </>
  );
};

export default ProductsHeader;
