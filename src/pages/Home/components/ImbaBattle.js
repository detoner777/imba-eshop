import React from "react";

const ImbaBattle = () => {
  return (
    <div className="imba-battle">
      <div className="imba-battle-container">
        {/* ---------Tite--------- */}
        <div className="imbattle__title title">
          <span>I</span> <span>M</span> <span>B</span> <span>A</span>{" "}
          <span>T</span> <span>T</span> <span>L</span> <span>E</span>
        </div>
        {/* ---------Tite--------- */}
        <h1 className="imbattle__h1">ПОЧЕМУ IMBA</h1>
        <h3 className="imbattle__h3">
          подходит для геймеров лучше, чем другие стандартные энергетики?
        </h3>
        {/* ---------------Content start--------------- */}
        <div className="imbattle__block-container">
          <div className="imbattle__pane green">
            <div className="imbattle__pane-header">IMBA GAME ENERGY</div>
            <div className="imbattle__pane-item">
              <div className="imbattle__num">01</div>
              <div className="imbattle__txt">
                Один раз заказал - 30 "банок" энергетика под рукой
              </div>
            </div>
            <div className="imbattle__pane-item">
              <div className="imbattle__num">02</div>
              <div className="imbattle__txt">
                Стоимость упаковки (1400 руб), в которой 30 порций
                энергетического напитка
              </div>
            </div>
            <div className="imbattle__pane-item">
              <div className="imbattle__num">03</div>
              <div className="imbattle__txt">
                В состав энергетика входит теанин, который способствует снижению
                нервозности
              </div>
            </div>
            <div className="imbattle__pane-item">
              <div className="imbattle__num">04</div>
              <div className="imbattle__txt">Без сахара</div>
            </div>
            <div className="imbattle__pane-item">
              <div className="imbattle__num">05</div>
              <div className="imbattle__txt">Способствует нормальному сну</div>
            </div>
            {/* <img className="b-lazy img-mobile" src="https://assets3.insales.ru/assets/1/2675/1378931/1587461204/empty.svg" data-src="https://assets3.insales.ru/assets/1/2675/1378931/1587461204/card1.png" alt=""> */}
          </div>
          <div className="imbattle__vs">vs</div>
          <div className="imbattle__pane yellow">
            <div className="imbattle__pane-header">ОБЫЧНЫЙ ЭНЕРГЕТИК</div>
            <div className="imbattle__pane-item">
              <div className="imbattle__num">01</div>
              <div className="imbattle__txt">
                Нужно постоянно ходить в магазин
              </div>
            </div>
            <div className="imbattle__pane-item">
              <div className="imbattle__num">02</div>
              <div className="imbattle__txt">
                Средняя стоимость банки 90 руб
              </div>
            </div>
            <div className="imbattle__pane-item">
              <div className="imbattle__num">03</div>
              <div className="imbattle__txt">
                30 банок энергетика - это полкило мусора
              </div>
            </div>
            <div className="imbattle__pane-item">
              <div className="imbattle__num">04</div>
              <div className="imbattle__txt">
                Повышенная нервозность после употребления
              </div>
            </div>
            <div className="imbattle__pane-item">
              <div className="imbattle__num">05</div>
              <div className="imbattle__txt">
                Сахар в энергетиках через 1.5 часа даёт эффект "разбитости"
              </div>
            </div>
            {/* <img className="b-lazy img-mobile" src="https://assets3.insales.ru/assets/1/2675/1378931/1587461204/empty.svg" data-src="https://assets3.insales.ru/assets/1/2675/1378931/1587461204/card2.png" alt=""> */}
          </div>
        </div>
        {/* ---------------Content start end--------------- */}
        <div class="imbattle__gifs">
          <img src={require(`../../../assets/home/imbattle_gif.gif`)} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ImbaBattle;
