import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

import "./Menubar.css";

const Menubar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const navLinkStyle = ({ isActive }) => {
    return {
      paddingBottom: "53px",
      width: "64px",
      height: "24px",
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
      color: isActive ? "#7a06c9" : "#5a5a5a",
      textTransform: "capitalize",
      textDecoration: "none",
    };
  };

  const handleClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="menubar">
      <FiMenu
        onClick={handleClick}
        size={30}
        style={{
          color: "#3387d5",

          marginRight: "24px",
        }}
      />
      {showMenu && (
        <div className="menu">
          <div className="menu-icon">
            <MdClose
              onClick={() => setShowMenu(false)}
              size={30}
              color="#7a06c9"
              style={{ margin: "15px" }}
            />
          </div>
          <div className="menu-link">
            <NavLink style={navLinkStyle} to="/">
              Trade
            </NavLink>
            <NavLink style={navLinkStyle} to="/earn">
              Earn
            </NavLink>
            <NavLink style={navLinkStyle} to="/support">
              Support
            </NavLink>
            <NavLink style={navLinkStyle} to="/about">
              About
            </NavLink>
            <button className="menuconnect-btn">
              <p>Connect Wallet</p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menubar;
