import React from "react";
import UserProfile from "../components/UserProfile/UserProfile";
import MainNav from "../components/MainNav/MainNav";
import { Col, Button, OverlayTrigger, Tooltip, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Profile() {
  let flexbox = {
    display: "flex",
    flexDirection: "row",
  };

  return (
    <div>
      <MainNav />
      <div className="flexbox-containter" style={flexbox}>
        <Col xs={4} md={3} lg={3} className="animated fadeIn delay-2s side-nav">
          <div className="prof-signout prof-page">
            <Row className="justify-content-center">
              <Button>
                <OverlayTrigger
                  key="bottom"
                  placement="bottom"
                  overlay={
                    <Tooltip id={`tooltip-bottom`}>back to mine</Tooltip>
                  }
                >
                  <Link to="/mine">
                    <i className="far fa-gem fa-2x"></i>
                  </Link>
                </OverlayTrigger>
              </Button>
            </Row>
          </div>
          <div className="create-heading prof-heading">saved gems</div>
        </Col>
        <UserProfile />;
      </div>
    </div>
  );
}

export default Profile;
