import React from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import "./LeftNav.css";

function LeftNav() {
  /* This defines the actual bar going down the screen */
  let StyledSideNav = {
    position: "fixed",
    height: "100%",
    width: "350px",
    zIndex: "1",
    backgroundColor: "#034169",
    overflowX: "hidden",
    paddingTop: "10px",
    boxShadow: "4px 4px 4px 4px #00000080",
  };

  return (
    <Container style={StyledSideNav}>
      <div className="create-heading">choose your topics below:</div>
      <Form>
        {["radio"].map((type) => (
          <div key={`default-${type}`} className="mb-3 choices">
            <Row className="rad-row">
              <Col md={4} className="choices-col">
                <Form.Check label="Sports" type={type} id={`default-${type}`} />
              </Col>
              <Col md={4} className="choices-col">
                <Form.Check
                  label="Politics"
                  type={type}
                  id={`default-${type}`}
                />
              </Col>
            </Row>
            <Row className="rad-row">
              <Col md={4} className="choices-col">
                <Form.Check label="Art" type={type} id={`default-${type}`} />
              </Col>
              <Col md={4} className="choices-col">
                <Form.Check
                  label="Fashion"
                  type={type}
                  id={`default-${type}`}
                />
              </Col>
            </Row>
            <Row className="rad-row">
              <Col md={4} className="choices-col">
                <Form.Check
                  label="Technology"
                  type={type}
                  id={`default-${type}`}
                />
              </Col>
              <Col md={4} className="choices-col">
                <Form.Check
                  label="Animals"
                  type={type}
                  id={`default-${type}`}
                />
              </Col>
            </Row>
            <Row className="rad-row">
              <Col md={4} className="choices-col">
                <Form.Check
                  label="Home Decor"
                  type={type}
                  id={`default-${type}`}
                />
              </Col>
              <Col md={4} className="choices-col">
                <Form.Check label="Music" type={type} id={`default-${type}`} />
              </Col>
            </Row>
          </div>
        ))}
        <br />
      </Form>
    </Container>
  );
}

export default LeftNav;
