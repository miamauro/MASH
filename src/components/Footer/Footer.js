import React from "react";
import "../Footer/Footer.css";
import mhlogo from "../images/MHProductions.png";

function Footer() {
  return (
    <footer className="footer">
      {/* <h4>Mia & Holly Productions</h4> */}
      <img src={mhlogo} alt="mh logo"></img>
    </footer>
  );
}

export default Footer;
