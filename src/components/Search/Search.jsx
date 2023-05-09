import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

import "./Search.css";
import { TokenState } from "../../Context/context";

const Search = ({ data, search, onChange }) => {
  const { handleTokenSelect, handleModalClose } = TokenState();
  return (
    <div className="search">
      <div className="close-container">
        <AiOutlineClose onClick={handleModalClose} color="white" />
      </div>
      <div className="search-box">
        <FiSearch color="#d2d2d2" style={{ marginLeft: "15px" }} />
        <input placeholder="Search" value={search} onChange={onChange} />
      </div>
      <div className="search-tokens">
        {data.map((token) => (
          <div
            onClick={() => handleTokenSelect(token.name, token.logo)}
            className="select-token"
            key={token.name}
          >
            {token && (
              <>
                <img src={token.logo} alt={token.name} />
                <p>{token.name}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
