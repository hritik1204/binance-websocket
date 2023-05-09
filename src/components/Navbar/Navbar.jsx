import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";
import Menubar from "../Menubar/Menubar";

const Navbar = () => {
  const navLinkStyle = ({ isActive }) => {
    return {
      marginRight: "50px",
      paddingBottom: "21px",

      width: "64px",
      height: "24px",
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",

      color: isActive ? "#627EEA" : "#5a5a5a",

      textTransform: "capitalize",
      textDecoration: "none",
      borderBottom: isActive ? "2px solid #627EEA" : "none",
    };
  };

  return (
    <div className="navbar">
      <h1 className="nav-heading">Neofi</h1>
      <Menubar />
      <div className="nav-link">
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
      </div>
      <button className="connect-btn">
        <p>Connect Wallet</p>
      </button>
    </div>
  );
};

export default Navbar;
