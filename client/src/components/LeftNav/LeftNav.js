import React, { useState } from "react";
import {
  Col,
  Row,
  Form,
  Button,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import "./LeftNav.css";
import { useStoreContext } from "../../utils/GlobalState";
import { NEW_FILTER } from "../../utils/actions";
import UserSignIn from "../UserSignIn/UserSignIn";

function LeftNav() {
  const [state, dispatch] = useStoreContext();
  const [filterObject, setFilterObject] = useState({});
  const { filter } = state;

  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    setFilterObject({ ...filterObject, [name]: value });
  };

  const handleApplyFilter = (event) => {
    event.preventDefault();
    dispatch({
      type: NEW_FILTER,
      filter: filterObject,
    });
  };

  return (
    <Col xs={4} md={3} lg={3} className="side-nav">
      <div className="prof-signout">
        <UserSignIn />
        <Button className="sign-out">
          <OverlayTrigger
            key="bottom"
            placement="bottom"
            overlay={<Tooltip id={`tooltip-bottom`}>sign out</Tooltip>}
          >
            <i class="fas fa-sign-out-alt fa-2x"></i>
          </OverlayTrigger>
        </Button>
      </div>
      <div className="create-heading">choose your topics below:</div>
      <Form>
        {["checkbox"].map((type) => (
          <div key={`default-${type}`} className="choices">
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
            <Row className="rad-row">
              <Col md={4} className="choices-col">
                <Form.Check
                  label="Movies"
                  name="Movies"
                  type={type}
                  id={`default-${type}`}
                  onChange={handleRadioChange}
                />
              </Col>
              <Col md={4} className="choices-col">
                <Form.Check
                  label="Entertainment"
                  name="Entertainment"
                  type={type}
                  id={`default-${type}`}
                  onChange={handleRadioChange}
                />
              </Col>
            </Row>
            <Row className="rad-row">
              <Col md={4} className="choices-col">
                <Form.Check
                  label="Literature"
                  name="Literature"
                  type={type}
                  id={`default-${type}`}
                  onChange={handleRadioChange}
                />
              </Col>
              <Col md={4} className="choices-col">
                <Form.Check
                  label="Style"
                  name="Style"
                  type={type}
                  id={`default-${type}`}
                  onChange={handleRadioChange}
                />
              </Col>
            </Row>
            <Row className="rad-row">
              <Col md={4} className="choices-col">
                <Form.Check
                  label="Science"
                  name="Science"
                  type={type}
                  id={`default-${type}`}
                  onChange={handleRadioChange}
                />
              </Col>
              <Col md={4} className="choices-col">
                <Form.Check
                  label="Travel"
                  name="Travel"
                  type={type}
                  id={`default-${type}`}
                  onChange={handleRadioChange}
                />
              </Col>
            </Row>
            <Row className="rad-row">
              <Col md={4} className="choices-col">
                <Form.Check
                  label="Food"
                  name="Food"
                  type={type}
                  id={`default-${type}`}
                  onChange={handleRadioChange}
                />
              </Col>
              <Col md={4} className="choices-col">
                <Form.Check
                  label="Health"
                  name="Health"
                  type={type}
                  id={`default-${type}`}
                  onChange={handleRadioChange}
                />
              </Col>
            </Row>
          </div>
        ))}
        <br />
        <Button className="apply-btn" onClick={handleApplyFilter}>
          Apply
        </Button>
      </Form>
    </Col>
  );
}

export default LeftNav;
