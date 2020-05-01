import React from "react";
import "./LandingPage.css";
import purplegem from "../../img/purplegem.png";
import { Button } from "react-bootstrap";

function LandingPage() {
  return (
    <div className="geode">
      <img src={purplegem} height="80px" width="80px" alt="gem" />
      <span className="majj-text">MAJJ</span>
      <div className="slogan-mainnav">mining for gems on the web</div>
      <div className="about">
        We're making it easier for you to dig through the web for topics based
        on your preferences, save to your profile, and view at your leisure.
        click below to get diggin'.
      </div>
      <Button>Start Mining</Button>
    </div>
  );
}

export default LandingPage;
