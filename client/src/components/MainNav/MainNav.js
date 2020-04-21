import React from "react";
import "./MainNav.css";
import Nav from "react-bootstrap/Nav";
import yellowgem from "../../img/yellowgem.png";

function MainNav() {
  return (
    <Nav className='justify-content-center majj'>
      <Nav.Item className='majj-text'>
        <img
          src={yellowgem}
          height='80px'
          width='80px'
          alt='gem'
          className='rotate yellowgem'
        />
        majj
      </Nav.Item>
    </Nav>
  );
}

export default MainNav;
