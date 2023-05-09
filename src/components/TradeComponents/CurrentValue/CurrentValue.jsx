import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

import { TokenState } from "../../../Context/context";

import "./CurrentValue.css";
import Search from "../../Search/Search";

const CurrentValue = () => {
  const {
    modalOpen,
    handleModalClose,
    handleModalOpen,
    filteredTokens,
    searchQuery,
    handleSearchChange,
    selectedToken,
    price,
  } = TokenState();

  return (
    <>
      <div className="trade-value">
        <div className="current-value">
          <p className="value-p">Current value</p>
          <p className="amount-p">{price ? `₹ ${price}` : "Loading..."}</p>
        </div>
        <div className="coin" onClick={handleModalOpen}>
          <div>
            <img src={selectedToken?.logo} alt={selectedToken?.name} />
            <p className="coin-p">{selectedToken.name}</p>
          </div>
          <IoMdArrowDropdown color="#6E56F8" style={{ marginRight: "15px" }} />
        </div>
      </div>
      <div
        className={modalOpen ? "overlay" : ""}
        onClick={handleModalClose}
      ></div>
      {modalOpen && (
        <Search
          data={filteredTokens}
          search={searchQuery}
          onChange={handleSearchChange}
        />
      )}
    </>
  );
};

export default CurrentValue;
