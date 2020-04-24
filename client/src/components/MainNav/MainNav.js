import React from "react";
import "./MainNav.css";
import yellowgem from "../../img/yellowgem.png";

function MainNav() {
  return (
    <>
      <div className="container-fluid majj text-center">
        <div className="majj-text">
          <img
            src={yellowgem}
            height="80px"
            width="80px"
            alt="gem"
            className="rotate yellowgem"
          />
          majj
          <div className="slogan-mainnav">mining for gems on the web</div>
        </div>
      </div>
    </>
  );
}

export default MainNav;
