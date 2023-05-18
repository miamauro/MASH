import React from "react";
import logo from "../images/MASHlogo.png";

function Header() {
  return (
    <div className="sticky-top text-center header-nav">
      <img src={logo} alt="mash logo"></img>
    </div>
  );
}

export default Header;
