import React, { useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import "./LeftNav.css";
import { useStoreContext } from "../../utils/GlobalState";
import { NEW_FILTER } from "../../utils/actions";
import UserSignIn from "../UserSignIn/UserSignIn";

function LeftNav() {
  const [state, dispatch] = useStoreContext();
  const [filterObject, setFilterObject] = useState({});

  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    event.preventDefault();
    setFilterObject({ ...filterObject, [name]: value });
  };

  const handleApplyFilter = (event) => {
    event.preventDefault();
    dispatch({
      type: NEW_FILTER,
      filter: filterObject,
    });

    let { filter } = state;
    // console.log(filter)
  };

  /* This defines the actual bar going down the screen */
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
    <Col xs={3} md={4} lg={3} style={StyledSideNav}>
      <UserSignIn />
      <Button className="sign-out" style={style}>
        <i class="fas fa-sign-out-alt fa-2x"></i>
      </Button>
      <div className="create-heading">choose your topics below:</div>
      <Form>
        {["checkbox"].map((type) => (
          <div key={`default-${type}`} className="mb-3 choices">
            <Row className="rad-row">
              <Col md={4} className="choices-col">
                <Form.Check
                  label="Sports"
                  name="Sports"
                  type={type}
                  id={`default-${type}`}
                  onChange={handleRadioChange}
                />
              </Col>
              <Col md={4} className="choices-col">
                <Form.Check
                  label="Politics"
                  name="Politics"
                  type={type}
                  id={`default-${type}`}
                  onChange={handleRadioChange}
                />
              </Col>
            </Row>
            <Row className="rad-row">
              <Col md={4} className="choices-col">
                <Form.Check
                  label="Art"
                  name="Art"
                  type={type}
                  id={`default-${type}`}
                  onChange={handleRadioChange}
                />
              </Col>
              <Col md={4} className="choices-col">
                <Form.Check
                  label="Fashion"
                  name="Fashion"
                  type={type}
                  id={`default-${type}`}
                  onChange={handleRadioChange}
                />
              </Col>
            </Row>
            <Row className="rad-row">
              <Col md={4} className="choices-col">
                <Form.Check
                  label="Technology"
                  name="Technology"
                  type={type}
                  id={`default-${type}`}
                  onChange={handleRadioChange}
                />
              </Col>
              <Col md={4} className="choices-col">
                <Form.Check
                  label="Animals"
                  name="Animals"
                  type={type}
                  id={`default-${type}`}
                  onChange={handleRadioChange}
                />
              </Col>
            </Row>
            <Row className="rad-row">
              <Col md={4} className="choices-col">
                <Form.Check
                  label="Home Decor"
                  name="Home Decor"
                  type={type}
                  id={`default-${type}`}
                  onChange={handleRadioChange}
                />
              </Col>
              <Col md={4} className="choices-col">
                <Form.Check
                  label="Music"
                  name="Music"
                  type={type}
                  id={`default-${type}`}
                  onChange={handleRadioChange}
                />
              </Col>
            </Row>
          </div>
        ))}
        <br />
        <Button className="apply-btn" style={style} onClick={handleApplyFilter}>
          Apply
        </Button>
      </Form>
    </Col>
  );
}

export default LeftNav;
