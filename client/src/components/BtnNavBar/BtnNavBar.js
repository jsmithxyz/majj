import React from "react";
import "./BtnNavBar.css";
import { Button, Nav } from "react-bootstrap";

function BtnNavBar() {
  let style = {
    backgroundColor: "#461767",
    color: "#675682",
    border: "0px",
    borderRadius: "10px",
  };

  return (
    <>
      <Nav className="justify-content-center majjnav">
        <Nav.Item>
          <Button style={style} className="nav-btns">
            <i class="fas fa-star fa-2x"></i>
          </Button>
        </Nav.Item>
        <Nav.Item>
          <Button style={style} className="nav-btns next" size="lg">
            <i class="fas fa-long-arrow-alt-right fa-3x"></i>
          </Button>
        </Nav.Item>
        <Nav.Item>
          <Button style={style} className="nav-btns">
            <i class="fas fa-user-circle fa-2x"></i>
          </Button>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default BtnNavBar;
