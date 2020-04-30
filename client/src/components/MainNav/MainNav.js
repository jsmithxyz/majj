import React from "react";
import "./MainNav.css";
import purplegem from "../../img/purplegem.png";
import { Navbar } from "react-bootstrap";

function MainNav() {
  return (
    <Navbar
      sticky="top"
      className="justify-content-center container-fluid majj"
    >
      <div>
        <div className="majj-text">
          <img
            src={purplegem}
            height="80px"
            width="80px"
            alt="gem"
            className="rotate yellowgem"
          />
          MAJJ
          <div className="slogan-mainnav">mining for gems on the web</div>
        </div>
      </div>
    </Navbar>
  );
}

export default MainNav;
