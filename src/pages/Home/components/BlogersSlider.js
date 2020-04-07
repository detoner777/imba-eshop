import React, { useEffect, useState } from "react";

import Carousel from "react-bootstrap/Carousel";

import TipDota from "../../../assets/home/blogers/tip-dota.png";
import SamJhon from "../../../assets/home/blogers/sam-jhon.png";
import Murcci from "../../../assets/home/blogers/murcci.png";
import Sn1p3r90 from "../../../assets/home/blogers/sn1p3r90.png";
import AxisCosmic from "../../../assets/home/blogers/axis-cosmic.png";
import DzhiDzhi from "../../../assets/home/blogers/dzhi-dzhi.png";
import Wgc from "../../../assets/home/blogers/wgc.png";

const BlogersSlider = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <Carousel>
      <Carousel.Item>
        <img className="blog-img1" src={TipDota} alt="first slide" />
        <div className="overlay"></div>
      </Carousel.Item>
    </Carousel>
  );
};

export default BlogersSlider;
