import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Age } from "../../assets/footer/age-footer.svg";

import { ReactComponent as Apple } from "../../assets/footer/apple.svg";
import { ReactComponent as Google } from "../../assets/footer/google.svg";
import { ReactComponent as Visa } from "../../assets/footer/visa.svg";
import { ReactComponent as Master } from "../../assets/footer/master.svg";

import { ReactComponent as Vk } from "../../assets/footer/vk.svg";
import { ReactComponent as Twitter } from "../../assets/footer/twitter.svg";
import { ReactComponent as Instagram } from "../../assets/footer/inst.svg";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-header">
        <Link to="/home">Главная </Link>
        <Link to="/products">Магазин</Link>
        <Link to="/delivery">Доставка</Link>
        <Link to="/contacts">Контакты</Link>
        <Link to="/cart">Корзина</Link>
      </div>
      <hr id="footer-hr" />
      <div className="footer-foot-wrapper">
        {/* ------------ */}
        <div className="footer-foot__logo">
          <div className="footer-foot__logo_img">
            {" "}
            <Link to={"/home"}>
              <Logo className="footer-foot__logo" />
            </Link>
            <Age className="footer-foot__ages" />
          </div>
          <p>2019. Все права защищены</p>
        </div>
        {/* ------------ */}
        <div className="footer-foot__contacts">
          <h5>КОНТАКТЫ</h5>
          <a className="footer__link" href="mailto:shop@imba.shop">
            shop@imba.shop
          </a>
          <a
            className="footer__link  footer__link--ptop"
            href="tel:+74959574869"
          >
            +7(495)-957-48-69
          </a>
          <p>(ПН - ВС) 10:00 -19:00</p>
        </div>
        {/* ------------ */}
        <div className="footer-foot__payments">
          <h5>ОПЛАТА</h5>
          <span>
            <Visa className="foot__payments_icon" />
            <Master className="foot__payments_icon" />
          </span>
          <span>
            <Google className="foot__payments_icon" />
            <Apple className="foot__payments_icon" />
          </span>
        </div>
        {/* ------------ */}
        <div className="footer-foot__social">
          <h5>СОЦИАЛЬНЫЕ СЕТИ</h5>
          <span>
            <a href="https://twitter.com/IMBAenergy">
              <Twitter className="foot__social__icon twitter" />
            </a>
            <a href="https://www.instagram.com/imba_energy/">
              <Instagram className="foot__social__icon instagram" />
            </a>
            <a href="http://vk.com/imbaenergy">
              <Vk className="foot__social__icon vk" />
            </a>
          </span>
        </div>
        {/* ------------ */}
        <div className="footer-foot__oferta">
          <h5>IMBA.SHOP</h5>
          <Link className="foot__oferta_logo" to="/exchange">
            Возврат
          </Link>
          <Link className="foot__oferta_logo" to="/privacy_policy">
            Политика конфидициальности
          </Link>
          <Link className="foot__oferta_logo" to="/oferta">
            Оферта
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
