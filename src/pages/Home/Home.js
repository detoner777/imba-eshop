import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import SoldOut from "./components/SoldOut";
import WinStrike from "./components/WinStrike";
import SponsorsAbout from "./components/SponsorsAbout";
import BlogersSlider from "./components/BlogersSlider";
import ImbaBattle from "./components/ImbaBattle";

// import headerCover from "../../assets/home/banner-img.png";

const Home = () => {
  return (
    <Fragment>
      <SoldOut />
      {/* Index Header start */}
      <div className="index-header">
        <div className="header-img__left">
          {/* <img src={headerCover} alt="" /> */}
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
              <Link to="/products" className="index-header__btn">
                Участвуй
              </Link>
            </div>
          </div>{" "}
        </div>
      </div>
      {/* Index Header end */}
      <WinStrike />
      <SponsorsAbout />
      <BlogersSlider />
      <ImbaBattle />
    </Fragment>
  );
};

export default Home;
