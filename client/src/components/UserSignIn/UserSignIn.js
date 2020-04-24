import React, { useState } from "react";
import "./UserSignIn.css";
import { Modal, Button, Form } from "react-bootstrap";
import mdyellowgem from "../../img/mdyellowgem.png";
import yellowgem from "../../img/yellowgem.png";

function UserSignIn() {
  const [show, setShow] = useState(false);
  const [formObject, setFormObject] = useState({})

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.username && formObject.password) {
      // some user login action here

    }
  };

  let style = {
    backgroundColor: "#461767",
    color: "#675682",
    border: "0px",
    borderRadius: "10px",
  };

  return (
    <>
      <Button className="mod-btn" style={style} onClick={handleShow}>
        <img src={mdyellowgem} height="30px" width="30px" alt="gem" />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Title className="mod-heading mod-head">
          <img
            src={yellowgem}
            height="30px"
            width="30px"
            alt="gem"
            className="yellowgem"
          />
          majj
          <div className="slogan">mining for gems on the web</div>
        </Modal.Title>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                onChange={handleInputChange}
                name="username"
                type="username"
                placeholder="Enter Username" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={handleInputChange}
                name="password"
                type="password"
                placeholder="Password" />
            </Form.Group>
          </Form>
          Never been here before? Click Sign Up to get started!
        </Modal.Body>
        <Modal.Footer>
          <Button className="mod-btn" style={style}
            onClick={
              handleClose,
              handleFormSubmit
            }>
            Login
          </Button>
          <Button className="mod-btn" style={style}
            onClick={
              handleClose,
              handleFormSubmit
            }>
            SignUp
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UserSignIn;
