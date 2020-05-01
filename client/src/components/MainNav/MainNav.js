import React from "react";
import { useState } from "react";
import useWindowScrollPosition from "@rehooks/window-scroll-position";
import "./MainNav.css";
import purplegem from "../../img/purplegem.png";
import { Navbar } from "react-bootstrap";

function MainNav() {
  // change to nav on scroll, need to finish figuring this out
  const [change, setChange] = useState(false);
  const changePosition = 0;

  let position = useWindowScrollPosition();
  // position == { x: 0, y: 0 }

  if (position.y > changePosition && !change) {
    setChange(true);
  }

  if (position.y <= changePosition && change) {
    setChange(false);
  }

  let style = {
    backgroundColor: change ? "transparent" : "#7e7e7e",
    transition: "400ms ease",
  };

  return (
    <Navbar
      sticky="top"
      className="justify-content-center text-center container-fluid majj"
      style={style}
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
