import React from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  return (
    <div className="left-nav">
      <Link to="/" className="nav-button">
        Home
      </Link>

      <Link to="/login" className="nav-button">
        Login/Signup
      </Link>

      <Link to="/logout" className="nav-button">
        Logout
      </Link>
    </div>
  );
};

export default LeftNav;
