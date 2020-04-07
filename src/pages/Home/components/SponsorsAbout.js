import React, { useEffect, useState, Fragment } from "react";

import Mania from "../../../assets/sponsors-logo/mania.png";
import Gameru from "../../../assets/sponsors-logo/gameru.png";
import Brodude from "../../../assets/sponsors-logo/brodude.svg";
import Gameguru from "../../../assets/sponsors-logo/gameguru.svg";
import Sostav from "../../../assets/sponsors-logo/sostav.png";
import ProGamer from "../../../assets/sponsors-logo/progamer.png";

const SponsorAbout = () => {
  return (
    <article className="overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h3 className="display-5  sponsor__h3">СМИ О НАС</h3>
          </div>
        </div>
      </div>

      {/* Igromania */}
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="flip flip-horizontal">
              <div className="front">
                <img src={Mania} />
              </div>
              <div className="back text-center">
                <a href="https://www.igromania.ru/news/82540/indev.html">
                  <h3>Igromania</h3>
                </a>
                <p className="lead">
                  «Имба энерджи»: просто добавь воды. И геймпад!
                </p>
              </div>
            </div>
          </div>

          {/* Gamer.ru */}
          <div className="col-md-4">
            <div className="flip flip-horizontal">
              <div className="front">
                <img src={Gameru} />
                {/* <h2 className="text-shadow text-center h1">Gameru</h2> */}
              </div>
              <div className="back text-center">
                <a href="https://www.gameru.net/post/55047">
                  <h3>Gamer.ru</h3>
                </a>
                <p className="lead">Чтобы стать имбой, нужна енергия!</p>
              </div>
            </div>
          </div>

          {/* Brodude */}
          <div className="col-md-4">
            <div className="flip flip-horizontal">
              <div className="front">
                <img src={Brodude} />
                {/* <h2 className="text-shadow text-center h1">Brodude</h2> */}
              </div>
              <div className="back text-center">
                <a href="https://brodude.ru/7-sovetov-po-uluchsheniyu-navykov-v-sorevnovatelnyh-videoigrah/">
                  <h3>Brodude</h3>
                </a>
                <p className="lead">
                  7 советов по улучшению навыков в соревновательных играх
                </p>
              </div>
            </div>
          </div>

          {/* Gamerguru */}
          <div className="col-md-4">
            <div className="flip flip-horizontal">
              <div className="front">
                <img src={Gameguru} />
                {/* <h2 className="text-shadow text-center h1">Gameru</h2> */}
              </div>
              <div className="back text-center">
                <a href="https://gameguru.ru/news/imba/view.html">
                  <h3>GamerGuru</h3>
                </a>
                <p className="lead">
                  IMBA Energy - растворимый енергетик для геймеров
                </p>
              </div>
            </div>
          </div>

          {/* Sostav */}
          <div className="col-md-4">
            <div className="flip flip-horizontal">
              <div className="front">
                <img src={Sostav} />
                {/* <h2 className="text-shadow text-center h1">Gameru</h2> */}
              </div>
              <div className="back text-center">
                <a href="https://www.sostav.ru/publication/imba-energy-novyj-partner-dota-2-sostava-winstrike-team-40641.html">
                  <h3>Sostava</h3>
                </a>
                <p className="lead">
                  IMBA Energy - новый партнер DOTA 2 состава WinstrikeTeam
                </p>
              </div>
            </div>
          </div>

          {/* ProGamer */}
          <div className="col-md-4">
            <div className="flip flip-horizontal">
              <div className="front">
                <img src={ProGamer} />
                {/* <h2 className="text-shadow text-center h1">Gameru</h2> */}
              </div>
              <div className="back text-center">
                <a href="https://www.progamer.ru/esports/imba-energy.htm">
                  <h3>Progamer</h3>
                </a>
                <p className="lead">Подними свой скил и стань имбой</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SponsorAbout;
