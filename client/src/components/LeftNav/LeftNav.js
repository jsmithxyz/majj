import React from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import "./LeftNav.css";

function LeftNav() {
  let StyledSideNav = {
    zIndex: "1",
    backgroundColor: "#034169",
    overflow: "hidden",
    height: "100vh",
    paddingTop: "10px",
    boxShadow: "4px 4px 4px 4px #00000080",
    position: "sticky",
    margin: "0px",
    marginRight: "20px",
  };

  let style = {
    backgroundColor: "#461767",
    color: "#675682",
    border: "0px",
    borderRadius: "10px",
  };

  return (
    <Col xs={12} md={4} lg={3} style={StyledSideNav}>
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
        <Button className="apply-btn" style={style}>
          Apply
        </Button>
      </Form>
    </Col>
  );
}

export default LeftNav;
