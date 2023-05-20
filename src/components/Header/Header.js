import React from "react";
import logo from "../images/mashlogofinal.png";
import "../Header/Header.css";

function Header() {
  return (
    <div className="sticky-top text-center" id="header-nav">
      <a href="/MASH">
        <img src={logo} alt="mash logo"></img>
      </a>
    </div>
  );
}

export default Header;
