import React from "react";
import "./NoMatchComponent.css";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

function NoMatchComponent() {
  return (
    <div className="no-match">
      <div className="message">OOPS! Page Not Found</div>
      404
      <div className="message">
        We are sorry, but the page you were looking for was not found.
      </div>
      <Link to="/mine">
        <Button className="back">Go Back</Button>
      </Link>
    </div>
  );
}

export default NoMatchComponent;
