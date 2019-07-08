import React from "react";
import logo from "../assets/Logo.png";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="currentcy logo" />
    </div>
  );
};

export default Header;
