import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="nav-left">
        <div className="home-link">
          <Link to="/"> Home </Link>
        </div>
      </div>
      <div className="nav-right">
        <div className="links">
          <Link to="/shop"> Shop </Link>
          <Link to="/contact"> Contact </Link>
          <Link to="/cart">
            <ShoppingCart size={38}/>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
