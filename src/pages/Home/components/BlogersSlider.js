import React, { useState } from "react";
import ContainerDimensions from "react-container-dimensions";

import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";

import TipDota from "../../../assets/home/blogers/tip-dota.png";
import SamJhon from "../../../assets/home/blogers/sam-jhon.png";
import Murcci from "../../../assets/home/blogers/murcci.png";
import Sn1p3r90 from "../../../assets/home/blogers/sn1p3r90.png";
import AxisCosmic from "../../../assets/home/blogers/axis-cosmic.png";
import DzhiDzhi from "../../../assets/home/blogers/dzhi-dzhi.png";
import Wgc from "../../../assets/home/blogers/wgc.png";

import Youtube from "../../../assets/icons/youtube.png";

const BlogersSlider = () => {
  const [index, setIndex] = useState(0);
  // const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    // setDirection(e.direction);
  };

  return (
    <div className="carouse-container">
      <h3>БЛОГЕРЫ О НАС</h3>
      <div className="carousel">
        <ContainerDimensions>
          {({ width }) => (
            <Carousel
              activeIndex={index}
              // direction={direction}
              onSelect={handleSelect}
              interval={2000}
            >
              <Carousel.Item>
                <div className="carousel-item-wrapper" style={{ width }}>
                  {" "}
                  <img
                    className="img-obj-fit"
                    src={TipDota}
                    alt="Zero slide"
                  />
                  <div className="carousel-content">
                    <h3>
                      Типичная дота{" "}
                      <a href="https://www.youtube.com/user/OpuramuUp/">
                        <img src={Youtube} alt="youtube-icon" />
                      </a>
                    </h3>
                    <p>
                      IMBA имеет очень интересный вкус и действенный эффект.
                      Сначала я был настроен скептически, но потом попробовал и
                      изменил своё мнение. И теперь, если мне надо быть бодрым в
                      начале дня или до глубокой ночи заниматься обработкой
                      видео, я пью IMBA
                    </p>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="carousel-item-wrapper" style={{ width }}>
                  {" "}
                  <img
                    className="img-obj-fit"
                    src={SamJhon}
                    alt="First slide"
                  />
                  <div className="carousel-content">
                    <h3>
                      СЭМ ДЖОНС{" "}
                      <a href="https://www.youtube.com/c/SamJones1">
                        <img src={Youtube} alt="youtube-icon" />
                      </a>
                    </h3>
                    <p>
                      IMBA - реально действенная штука! Вкус приятный и мягкий.
                      В составе есть теанин, туарин и кофеин, а главное нет
                      сахара, поэтому действие энергоса не проходит через 15
                      минут, а длится около пяти часов. Я рекомендую тебе его
                      попробовать, если необходимо дотянуть до самого утра за
                      компом, учебой, работой, да чем угодно.
                    </p>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="carousel-item-wrapper" style={{ width }}>
                  {" "}
                  <img
                    className="img-obj-fit"
                    src={Murcci}
                    alt="Second slide"
                  />
                  <div className="carousel-content">
                    <h3>
                      MURCCI{" "}
                      <a href="https://www.youtube.com/user/1Hopc1">
                        <img src={Youtube} alt="youtube-icon" />
                      </a>
                    </h3>
                    <p>
                      Привет, Друзья, меня звать Мурчи. Я начал пользоваться
                      продукцией IMBA, прошло два месяца, и пока что ещё не
                      пожалел! Мне очень нравится вкус продукта, самый любимый
                      виноград-грейпфрут, советую. Вдобавок к этому работники
                      IMBA очень дружелюбные.
                    </p>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="carousel-item-wrapper" style={{ width }}>
                  {" "}
                  <img
                    className="img-obj-fit"
                    src={Sn1p3r90}
                    alt="Third slide"
                  />
                  <div className="carousel-content">
                    <h3>
                      ЛЕХА SN1P3R90
                      <a href="https://www.youtube.com/user/sn1p3r90able">
                        <img src={Youtube} alt="youtube-icon" />
                      </a>
                    </h3>
                    <p>
                      Т.к. родился я аккурат перед распадом СССР, моё детство
                      выпало на девяностые годы прошлого столетия. И, конечно
                      же, при первом знакомстве с Imba Energy я не мог не
                      вспомнить Yupi и Zuko, которые мы с друзьями периодически
                      покупали и с удовольствием превращали обычную воду из-под
                      крана в разноцветный и вкусный напиток. Но в Imba Energy,
                      помимо вкуса, есть еще витамины, а также таурин и кофеин.
                      Что еще нужно для заряда бодрости?
                    </p>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="carousel-item-wrapper" style={{ width }}>
                  {" "}
                  <img
                    className="img-obj-fit"
                    src={AxisCosmic}
                    alt="Four slide"
                  />
                  <div className="carousel-content">
                    <h3>
                      AXIS COMICS
                      <a href="https://www.youtube.com/channel/UC2qWl0qSAjsofOc_PDOmSvw">
                        <img src={Youtube} alt="youtube-icon" />
                      </a>
                    </h3>
                    <p>
                      Прикольный вкус, ничего похожего раньше не пробовал. И как
                      бы странно это не звучало, действительно работает :) Очень
                      радует отсутствие сахара и сильной газации, из-за этого
                      кажется в меру сладким и очень приятным на вкус.
                    </p>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="carousel-item-wrapper" style={{ width }}>
                  {" "}
                  <img
                    className="img-obj-fit"
                    src={DzhiDzhi}
                    alt="Five slide"
                  />
                  <div className="carousel-content">
                    <h3>
                      DZHI-DZHI
                      <a href="https://www.youtube.com/user/niimanamzem">
                        <img src={Youtube} alt="youtube-icon" />
                      </a>
                    </h3>
                    <p>
                      Хорошая вещь для тех, кому приходится ударно работать с
                      утра до вечера, особенно, когда стабильно подкрепляться
                      некогда. IMBA дает мне достаточно энергии на весь день и
                      на работу! Ну и на катки потом хватает :D А главное —
                      мягкий приятный вкус!
                    </p>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="carousel-item-wrapper" style={{ width }}>
                  {" "}
                  <img className="img-obj-fit" src={Wgc} alt="Six slide" />
                  <div className="carousel-content">
                    <h3>
                      WGC
                      <a href="https://www.youtube.com/channel/UCqJQZm4sAZQ4nru45GseXsA">
                        <img src={Youtube} alt="youtube-icon" />
                      </a>
                    </h3>
                    <p>
                      Имба годный напиток, но не стоит ждать от него какого-то
                      "волшебства". В трудный момент, когда почувствовали, что
                      устали или не выспались, продукт поможет неплохо прийти в
                      себя. Эффект сопоставим с тем, будто вы выпили крепкий
                      кофе, только Имба гораздо вкуснее и не содержит сахар.
                      Вещь годная, главное не злоупотреблять!
                    </p>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          )}
        </ContainerDimensions>
      </div>
    </div>
  );
};

export default BlogersSlider;
