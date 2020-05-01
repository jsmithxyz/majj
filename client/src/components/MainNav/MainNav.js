import React from "react";
import "./MainNav.css";
import purplegem from "../../img/purplegem.png";
import { Navbar } from "react-bootstrap";

function MainNav() {
  return (
    <Navbar
      sticky="top"
      className="justify-content-center text-center container-fluid majj"
    >
      <div>
        <div className="animated flip majj-text">
          <img
            src={purplegem}
            height="60px"
            width="60px"
            alt="gem"
            className="rotate yellowgem"
          />
          MAJJ
          <div className="animated fadeIn delay-1s slogan-mainnav2">
            mining for gems on the web
          </div>
        </div>
      </div>
    </Navbar>
  );
}

export default MainNav;
