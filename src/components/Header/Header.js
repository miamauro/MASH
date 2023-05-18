import React from "react";
import logo from "../images/MASHlogo.png";
import "../Header/Header.css";

function Header() {
  return (
    <div className="sticky-top text-center" id="header-nav">
      <img src={logo} alt="mash logo"></img>
    </div>
  );
}

export default Header;
