import React from "react";

import MapContainer from "./components/GoogleMap";

const Contacts = () => {
  return (
    <div className="contacts-wrapper">
      <h1>Контакты</h1>
      <p>Как с нами связаться</p>
      {/* ----------Contacnts start --------------- */}
      <div className="contact-block__info-container">
        <div className="contact-block__address-block">
          <div className="contact-block__address-item">
            <div className="contact-block__item-name">Телефон</div>
            <div className="contact-block__item-description">
              <a href="tel:+74959574869">+7(495)-957-48-69</a>
            </div>
          </div>
          <div className="contact-block__address-item">
            <div className="contact-block__item-name">Почта</div>
            <div className="contact-block__item-description">
              <a href="mailto:info@imba.shop">info@imba.shop</a>
            </div>
          </div>
          <div className="contact-block__address-item">
            <div className="contact-block__item-name">Адрес</div>
            <div className="contact-block__item-description">
              117638, город Москва, улица Одесская, дом 2, Этаж 16, помещение
              IБ, ком. 2
            </div>
          </div>
        </div>
        <div className="law-block">
          <div className="law-info">
            <div className="law-info__name">
              Полное наименование организации
            </div>
            <div className="law-info__description">
              Общество с ограниченной ответственностью «ДМСК»
            </div>
          </div>
          <div className="law-info">
            <div className="law-info__name">Юридический адрес</div>
            <div className="law-info__description">
              117638, Город Москва, улица Одесская, дом 2, Этаж 16, помещение
              IБ, ком. 2
            </div>
          </div>
          <div className="law-info">
            <div className="law-info__name">ОГРН</div>
            <div className="law-info__description">1187746169962</div>
          </div>
          <div className="law-info">
            <div className="law-info__name">ИНН / КПП</div>
            <div className="law-info__description">7727339399 / 772701001</div>
            <div className="law-info__description">vk11030</div>
          </div>
        </div>
      </div>
      {/* ----------Contacnts end --------------- */}
      <h1>Карта схема проезда</h1>
      <MapContainer />
    </div>
  );
};
export default Contacts;
