import React from "react";

const SoldOut = () => {
  return (
    <div className="new-soldout-line">
      <div className="wrapper">
        До конца распродажи осталось
        <span id="days">6</span>
        <span id="bold">дней</span>
      </div>
    </div>
  );
};

export default SoldOut;
