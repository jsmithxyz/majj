import React from "react";
import "./MainNav.css";
import { Button } from "react-bootstrap";
import yellowgem from "../../img/yellowgem.png";
import gemfolder from "../../img/gemfolder.png";
import axe from "../../img/axe.png";
import mdyellowgem from "../../img/mdyellowgem.png";

function MainNav() {
  let style = {
    backgroundColor: "#461767",
    color: "#675682",
    border: "0px",
    borderRadius: "10px",
  };

  return (
    <>
      <div className="container-fluid majj">
        <div className="row">
          <div className="col-md-4 majj-text">
            <img
              src={yellowgem}
              height="80px"
              width="80px"
              alt="gem"
              className="rotate yellowgem"
            />
            majj
          </div>
          <div className="col-md-4 text-center">
            <Button style={style} className="nav-btns">
              <img
                src={gemfolder}
                height="30px"
                width="30px"
                alt="gem folder"
              />
            </Button>
            <Button style={style} className="nav-btns next">
              <img src={axe} height="50px" width="50px" alt="axe" />
            </Button>
            <Button style={style} className="nav-btns">
              <img src={mdyellowgem} height="30px" width="30px" alt="gem" />
            </Button>
          </div>
          <div className="col-md-4 text-right signout">
            <Button style={style} className="nav-btns">
              <i className="fas fa-sign-out-alt fa-2x"></i>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainNav;
