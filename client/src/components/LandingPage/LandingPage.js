import React from "react";
import { Link } from "react-router-dom";
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
        We're making it easier for you to dig through the web based on your
        preferences, save articles to your profile, and view at your leisure.
        Click below to get diggin'.
      </div>
      <Link to="/mine">
        <Button>Start Mining</Button>
      </Link>
    </div>
  );
}

export default LandingPage;
