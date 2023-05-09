import React from "react";

import CurrentValue from "../../components/TradeComponents/CurrentValue/CurrentValue";
import CurrentAmount from "../../components/TradeComponents/CurrentAmount/CurrentAmount";
import ButtonTrade from "../../components/TradeComponents/Button/ButtonTrade";

import "./Trade.css";

const Trade = () => {
  return (
    <div className="trade">
      <div className="trade-box">
        <CurrentValue />
        <CurrentAmount />
        <ButtonTrade />
      </div>
    </div>
  );
};

export default Trade;
