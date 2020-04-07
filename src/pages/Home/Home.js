import React, { useEffect, useState, Fragment } from "react";

import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

import SoldOut from "./components/SoldOut";

import headerCover from "../../assets/home/banner-img.png";

const Home = () => {
  return (
    <Fragment>
      <SoldOut />
      {/* Index Header start */}
      <div className="index-header">
        <img src={headerCover} />
        <div className="container-header-content">
          {" "}
          <div className="index-header__content">
            <p>купи комбо</p>
            <div className="index-header__price-block">
              <span className="index-header__price-new">-37% </span>
              <span className="index-header__price-old">-25%</span>
            </div>
            <div className="index-header__line1">Участвуй</div>
            <div className="index-header__line2">В розыгрыше!</div>
            <a href="*" className="index-header__btn">
              Участвуй
            </a>
          </div>
        </div>
      </div>
      {/* Index Header end */}
    </Fragment>
  );
};

export default Home;