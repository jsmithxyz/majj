import React, { useState } from "react";
import "./UserSignIn.css";
import { useStoreContext } from "../../utils/GlobalState";
import { Modal, Button, Form } from "react-bootstrap";
import purplegem from "../../img/purplegem.png";
import { SIGN_IN, SIGN_OUT } from "../../utils/actions";
import { Link } from "react-router-dom";
import API from "../../utils/API";

function UserSignIn() {
  const [state, dispatch] = useStoreContext();
  const [signUp, setSignUp] = useState("");
  const [show, setShow] = useState(false);
  // use this for user info?
  const [formObject, setFormObject] = useState({});
  const [errorState, setErrorState] = useState({ error: "" });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // Below two lines will manage user login state. if they want to sign up, this controls sign up form.
  // If they want to sign in, this controls sign in form.
  const handleSetSignUp = () => setSignUp("signup");
  const handleSetLogin = () => setSignUp("login");
  // const handleSignIn = setSignUp(false);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  async function handleRegisterSubmit(event) {
    event.preventDefault();
    console.log(formObject);
    let result = await API.registerUser(formObject);
    console.log("result from API.js: " + result);
    // !TODO if error, then do this
    if (result.status === 400) {
      console.log("before setFormObject call");
      console.log('error: ' + result.data.email)
      setErrorState({ errors: result.data.email }); // ! <-- why won't this update? 
      console.log(JSON.stringify(errorState));
      // console.log("from the front end!" + result.data.email);
    }
  }

  function handleLoginSubmit(event) {
    event.preventDefault();
    console.log(formObject);
    let result = API.loginUser(formObject);
    console.log("login result: " + JSON.stringify(result));
  }

  // can this conditional be dried up somehow?
  if (signUp === "signup") {
    // ! load this if the user wants to sign up
    return (
      <>
        <Button className="mod-btn" onClick={handleShow}>
          <i class="fas fa-user fa-2x"></i>
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Title className="mod-heading mod-head">
            <img
              src={purplegem}
              height="40px"
              width="40px"
              alt="gem"
              className="yellowgem"
            />
            MAJJ
          </Modal.Title>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  onChange={handleInputChange}
                  name="name"
                  type="name"
                  placeholder="Enter Full Name"
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  onChange={handleInputChange}
                  name="email"
                  type="email"
                  placeholder="Enter Email Address"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={handleInputChange}
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group controlId="formPasswordConfirm">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  onChange={handleInputChange}
                  name="password2"
                  type="password"
                  placeholder="Confirm password"
                />
              </Form.Group>
            </Form>
            Sign up here to start digging!
          </Modal.Body>
          <Modal.Footer>
            <Button className="mod-btn" onClick={handleRegisterSubmit}>
              Register!
            </Button>
            <Button className="mod-btn" onClick={handleSetLogin}>
              Return to Login
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  } else {
    // ! return this if user wants to log in or hasn't clicked 'sign up'
    return (
      <>
        <Button className="mod-btn" onClick={handleShow}>
          <i class="fas fa-user fa-2x"></i>
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Title className="mod-heading mod-head">
            <img
              src={purplegem}
              height="40px"
              width="40px"
              alt="gem"
              className="yellowgem"
            />
            MAJJ
          </Modal.Title>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  onChange={handleInputChange}
                  name="email"
                  type="email"
                  placeholder="Enter Username"
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={handleInputChange}
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
            </Form>
            Never been here before? Click Sign Up to get started!
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="mod-btn"
              onClick={(handleClose, handleLoginSubmit)}
            >
              Login
            </Button>
            <Button className="mod-btn" onClick={handleSetSignUp}>
              SignUp
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default UserSignIn;
