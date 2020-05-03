import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import purplegem from "../../img/purplegem.png";
import { Button } from "react-bootstrap";

function LandingPage() {
  return (
    <div className="geode">
      <div className="animated flip majj-text">
        <img src={purplegem} height="60px" width="60px" alt="gem" />
        MAJJ
      </div>
      <div className="animated fadeIn delay-1s slogan-mainnav">
        mining for gems on the web
      </div>
      <div className="animated fadeIn delay-2s about">
        We're making it easier for you to dig through the web based on your
        preferences, and save articles to your profile to view at your leisure.
        Click below to get diggin'.
      </div>
      <div className="animated rotateIn delay-3s">
        <Link to="/mine">
          <Button>Start Mining</Button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
