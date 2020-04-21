import React from "react";
import ErrorPng from "../../assets/error/404bite.png";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-container">
      <img src={ErrorPng} alt="error" />
      <h2>Упс, на этой странице пусто.</h2>
      <h3>Keep calm and recharge with IMBA GAME ENERGY. </h3>
      <Link to={"/home"} className="btn-green redirect-products">
        На главную
      </Link>
    </div>
  );
};

export default Error;
