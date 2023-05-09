import React from "react";

import "./CurrentAmount.css";
import { TokenState } from "../../../Context/context";

const CurrentAmount = () => {
  const { price, amount, handleAmountChange, totalToken } = TokenState();
  console.log(totalToken);
  const value = amount / price;
  return (
    <div className="trade-amount">
      <div className="current-amount">
        <p className="amt-p"> Amount you want to invest</p>
        <div className="amt-input">
          <input value={amount} onChange={handleAmountChange} type="number" />
          <p>INR</p>
        </div>
      </div>
      <div className="current-amount">
        <p className="amt-p" style={{ whiteSpace: "nowrap" }}>
          {" "}
          Estimate Number of Token You will Get
        </p>
        <div style={{ background: "#1C1731" }} className="amt-input">
          <input
            style={{ background: "#1C1731" }}
            disabled
            value={value ? value.toFixed(5) : "0.0"}
          />
        </div>
      </div>
    </div>
  );
};

export default CurrentAmount;
