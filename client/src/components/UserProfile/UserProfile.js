import React from "react";
import "./UserProfile.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import user from "../../img/userprofile.jpg";

function UserProfile() {
  return (
    <Container className="usercontainer">
      <Row className="justify-content-md-center">
        <Col xs={12} lg={2}></Col>
        <Col xs={12} lg={2}></Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs={12} lg={2}>
          <Image src={user} height="150px" width="150px" roundedCircle />
        </Col>
        <Col md="auto" className="align-self-center userheading">
          hello, username!
        </Col>
        <Col xs={12} lg={2}></Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs={12} lg={2}></Col>
        <Col md="auto" className="userheading">
          <Image src={gemfolder} height="60px" width="60px" /> your saved gems:
        </Col>
        <Col xs={12} lg={2}></Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto" className="links">
          <Image src={smyellowgem} /> links
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto" className="links">
          <Image src={smyellowgem} /> links
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto" className="links">
          <Image src={smyellowgem} /> links
        </Col>
      </Row>
    </Container>
  );
}

export default UserProfile;
