import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

// import Link from "react-router-dom";

const NavBar = () => {
  return (
    <div className="sidenav">
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <Typography color="inherit">Currentcy</Typography>
          </Link>
          <Link to="/login">
            <Typography color="inherit">Login</Typography>
          </Link>
          <Link to="/new">
            <Typography color="inherit">New tracker</Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;
