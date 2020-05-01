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
import { APPLY_FILTER, FILTER_CHANGE } from "../../utils/actions";
import UserSignIn from "../UserSignIn/UserSignIn";

function LeftNav() {
  const [state, dispatch] = useStoreContext();
  // const [filterObject, setFilterObject] = useState({});
  const { filter } = state;

  const handleRadioChange = (event) => {
    // console.log(event.target.checked)
    const { name, checked } = event.target;
    // setFilterObject({ ...filterObject, [name]: value });
    console.log(name + ": " + checked);
    dispatch({
      type: FILTER_CHANGE,
      topic: name,
      value: checked,
    });
  };

  const handleApplyFilter = (event) => {
    event.preventDefault();
    dispatch({
      type: APPLY_FILTER,
    });
  };

  return (
    <Col xs={4} md={3} lg={3} className="animated fadeIn delay-2s side-nav">
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
                  name="sports"
                  type={type}
                  id={`default-${type}`}
                  onChange={handleRadioChange}
                />
              </Col>
              <Col md={4} className="choices-col">
                <Form.Check
                  label="Politics"
                  name="politics"
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
                  name="art"
                  type={type}
                  id={`default-${type}`}
                  onChange={handleRadioChange}
                />
              </Col>
              <Col md={4} className="choices-col">
                <Form.Check
                  label="Fashion"
                  name="fashion"
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
                  name="technology"
                  type={type}
                  id={`default-${type}`}
                  onChange={handleRadioChange}
                />
              </Col>
              <Col md={4} className="choices-col">
                <Form.Check
                  label="Animals"
                  name="animals"
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
                  name="home Decor"
                  type={type}
                  id={`default-${type}`}
                  onChange={handleRadioChange}
                />
              </Col>
              <Col md={4} className="choices-col">
                <Form.Check
                  label="Music"
                  name="music"
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
                  name="movies"
                  type={type}
                  id={`default-${type}`}
                  onChange={handleRadioChange}
                />
              </Col>
              <Col md={4} className="choices-col">
                <Form.Check
                  label="Entertainment"
                  name="entertainment"
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
                  name="literature"
                  type={type}
                  id={`default-${type}`}
                  onChange={handleRadioChange}
                />
              </Col>
              <Col md={4} className="choices-col">
                <Form.Check
                  label="Style"
                  name="style"
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
                  name="science"
                  type={type}
                  id={`default-${type}`}
                  onChange={handleRadioChange}
                />
              </Col>
              <Col md={4} className="choices-col">
                <Form.Check
                  label="Travel"
                  name="travel"
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
                  name="food"
                  type={type}
                  id={`default-${type}`}
                  onChange={handleRadioChange}
                />
              </Col>
              <Col md={4} className="choices-col">
                <Form.Check
                  label="Health"
                  name="health"
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
