import React from "react";

const Delivery = () => {
  return (
    <div className="delivery-wrapper">
      <h1>Доставка IMBA Energy Drink</h1>
      <img
        src={require(`../../assets/delivery/image-delivery.png`)}
        alt=""
      ></img>
      <div className="delivery-block__contactless-right-header">
        Бесконтактная
        <br />
        доставка
      </div>
      <p>
        Уважаемые клиенты, в связи с ситуацией в стране рекомендуем вам
        использовать бесконтактный способ курьерской доставки от Boxberry. Он
        возможен только для предоплаченных заказов.
      </p>
      <p>
        Если вы живете в Москве или Московской области, курьер в установленное
        время оставит заказ у двери, позвонит и будет ждать на расстоянии не
        менее 1 метра. Если за товаром никто не выйдет, курьер вернет посылку на
        склад.
      </p>
      <div className="delivery-block__info">
        Мы доставляем заказы в любую точку России. Стоимость и сроки доставки
        зависят от региона, веса посылки и способа доставки. Стоимость
        рассчитывается автоматически и сразу включается в счет заказа.
      </div>
      <div className="delivery-block__header">
        ПОДРОБНЕЕ О СПОСОБАХ ДОСТАВКИ:
      </div>
      <div className="delivery-block__subheader">
        <span>01</span> Курьерская доставка Boxberry{" "}
        <img src={require(`../../assets/delivery/boxbery.png`)} alt="" />
      </div>
      <ul className="delivery-block__list">
        <li>- Посылку доставят до двери квартиры или офиса</li>
        <li>
          - Сроки: <span id="bbd">4-6</span> рабочих дней
        </li>
      </ul>
      <div className="delivery-block__subheader">
        <span>02</span> Самовывоз из пункта Boxberry
      </div>
      <div className="delivery-block__txt">
        Хотите забрать заказ самостоятельно? Вы можете посмотреть доступные для
        вашего города пункты выдачи на сайте{" "}
        <a
          href="https://boxberry.ru/find_an_office/"
          target="
			_blank"
        >
          https://boxberry.ru/find_an_office/
        </a>{" "}
        или при оформлении заказа.
      </div>
      <div className="delivery-block__subheader">
        <span>03</span> Самовывоз PickPoint
      </div>
      <div className="delivery-block__txt">
        <ul>
          <li id="del_li">
            - Доставка осуществляется только до пункта выдачи или постамата.
          </li>
        </ul>
        Курьерская доставка отсутствует.
      </div>
      <div className="delivery-block__subheader">
        <span>04</span> Почта России
      </div>
      <div className="delivery-block__txt">
        Мы работаем с Почтой России, чтобы отправить заказы в самые отдаленные
        регионы страны, а также в города, где отсутствует курьерская служба
        boxberry.
        <br />
        Сроки: <span id="prd">6-8</span> рабочих дней
      </div>
      <div className="delivery-block__gray">
        - Сроки доставки зависят от отдаленности вашего региона
      </div>
      <div className="delivery-block__header">ОПЛАТА:</div>
      <div className="delivery-block__subheader">
        <span>01</span> Оплата картой
      </div>
      <ul className="delivery-block__list">
        <li>
          - Бесплатная доставка при заказе от 1500 р и онлайн-оплате картой
        </li>
        <li>- Оплата картой обязательна при выборе доставки Почтой России</li>
        <li>
          - Оплата с помощью карт:{" "}
          <img src={require("../../assets/delivery/bank.png")} alt="" />
        </li>
      </ul>
      <div className="delivery-block__subheader">
        <span>02</span> Оплата наличными
      </div>
      <ul className="delivery-block__list">
        <li>- При получении заказа из пункта самовывоза</li>
        <li>- При доставке курьером</li>
      </ul>
      <div className="delivery-block__header">СКИДКИ И АКЦИИ</div>
      <div className="delivery-block__star">
        * скидка по промокоду действует только на товары и не распространяется
        на доставку.
      </div>
      <div className="delivery-block__star">
        ** скидки по промокоду не суммируются
      </div>
      <div>
        <img
          style={{ width: "100%" }}
          src={require(`../../assets/delivery/newmap.png`)}
          alt=""
        />
      </div>
    </div>
  );
};

export default Delivery;
