import React, { useState } from "react";
import "./CreateProfile.css";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

function CreateProfile() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let style = {
    backgroundColor: "#461767",
    color: "#675682",
    border: "0px",
    borderRadius: "10px",
  };

  return (
    <>
      <Button className="mod-btn" style={style} onClick={handleShow}>
        CreateProfile
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="mod-head" closeButton>
          <Modal.Title className="create-heading">
            Choose your topics below:
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {["radio"].map((type) => (
              <div key={`default-${type}`} className="mb-3 choices">
                <Row className="rad-row">
                  <Col md={4}>
                    <Form.Check
                      label="puppies"
                      type={type}
                      id={`default-${type}`}
                    />
                  </Col>
                  <Col md={4}>
                    <Form.Check
                      label="kittens"
                      type={type}
                      id={`default-${type}`}
                    />
                  </Col>
                  <Col md={4}>
                    <Form.Check
                      label="news"
                      type={type}
                      id={`default-${type}`}
                    />
                  </Col>
                </Row>
                <Row className="rad-row">
                  <Col md={4}>
                    <Form.Check
                      label={`default ${type}`}
                      type={type}
                      id={`default-${type}`}
                    />
                  </Col>
                  <Col md={4}>
                    <Form.Check
                      label={`default ${type}`}
                      type={type}
                      id={`default-${type}`}
                    />
                  </Col>
                  <Col md={4}>
                    <Form.Check
                      label={`default ${type}`}
                      type={type}
                      id={`default-${type}`}
                    />
                  </Col>
                </Row>
                <Row className="rad-row">
                  <Col md={4}>
                    <Form.Check
                      label={`default ${type}`}
                      type={type}
                      id={`default-${type}`}
                    />
                  </Col>
                  <Col md={4}>
                    <Form.Check
                      label={`default ${type}`}
                      type={type}
                      id={`default-${type}`}
                    />
                  </Col>
                  <Col md={4}>
                    <Form.Check
                      label={`default ${type}`}
                      type={type}
                      id={`default-${type}`}
                    />
                  </Col>
                </Row>
              </div>
            ))}
            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                Don't see anything you like? Add your own topics below:
              </Form.Label>
              <Form.Control
                type="input"
                placeholder="recipes, plants, guitars, etc"
              />
            </Form.Group>
          </Form>
          <div className="append-topics">
            append topics as a button with an x here?
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="mod-btn" style={style} onClick={handleClose}>
            Find Gems
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateProfile;
