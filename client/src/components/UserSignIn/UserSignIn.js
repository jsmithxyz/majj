import React, { useState } from "react";
import "./UserSignIn.css";
import { useStoreContext } from "../../utils/GlobalState";
import { Modal, Button, Form } from "react-bootstrap";
import purplegem from "../../img/purplegem.png";
import { SIGN_IN, SIGN_OUT } from "../../utils/actions";
import { Link } from "react-router-dom";
import API from "../../utils/API";

function UserSignIn() {
<<<<<<< HEAD
=======
  const [state, dispatch] = useStoreContext();
>>>>>>> 70493780fa7509a3fdde71326773a0da948751dc
  const [signUp, setSignUp] = useState("");
  const [show, setShow] = useState(false);
  // use this for user info?
  const [formObject, setFormObject] = useState({});

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

  // validating object
  // function showInfo() {
  //   console.log(formObject);
  // }

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database

  // !TODO - come back to this - not sure we're going to need it
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(formObject);
    API.registerUser(formObject);
   

    // if (userObject.email && userObject.password) {
    //   // some user login action here
    //   // api call to grab user from DB
    //   dispatch({
    //     type: SIGN_IN,
    //     user: formObject,
    //   });
    // }
  }

  // can this conditional be dried up somehow?
  if (signUp === "signup") {
    // ! load this if the user wants to sign up
    return (
      <>
        <Button className="mod-btn" onClick={handleShow}>
          <i class="fas fa-user fa-2x"></i>
        </Button>

<<<<<<< HEAD
  // can this conditional be dried up somehow?
  if (signUp === "signup") {
    // load this if the user wants to sign up
    return (
      <>
        <Button className="mod-btn" style={style} onClick={handleShow}>
          <i class="fas fa-user fa-2x"></i>
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
              <Form.Group controlId="formBasicName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  onChange={handleInputChange}
                  name="fullname"
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
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  onChange={handleInputChange}
                  name="username"
                  type="username"
                  placeholder="Enter Username"
                />
              </Form.Group>
=======
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

>>>>>>> 70493780fa7509a3fdde71326773a0da948751dc
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={handleInputChange}
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
<<<<<<< HEAD
=======
              <Form.Group controlId="formPasswordConfirm">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  onChange={handleInputChange}
                  name="password2"
                  type="password2"
                  placeholder="Confirm password"
                />
              </Form.Group>
>>>>>>> 70493780fa7509a3fdde71326773a0da948751dc
            </Form>
            Sign up here to start digging!
          </Modal.Body>
          <Modal.Footer>
<<<<<<< HEAD
            <Button className="mod-btn" style={style} onClick="">
              Register!
            </Button>
            <Button className="mod-btn" style={style} onClick={handleSetLogin}>
=======
            <Button className="mod-btn" onClick={handleFormSubmit}>
              Register!
            </Button>
            {/* currently links to new page - will handle with router? */}
            {/* <Link to="/register">Register</Link> */}
            <Button className="mod-btn" onClick={handleSetLogin}>
>>>>>>> 70493780fa7509a3fdde71326773a0da948751dc
              Return to Login
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  } else {
<<<<<<< HEAD
    // return this if user wants to log in or hasn't clicked 'sign up'
    return (
      <>
        <Button className="mod-btn" style={style} onClick={handleShow}>
=======
    // ! return this if user wants to log in or hasn't clicked 'sign up'
    return (
      <>
        <Button className="mod-btn" onClick={handleShow}>
>>>>>>> 70493780fa7509a3fdde71326773a0da948751dc
          <i class="fas fa-user fa-2x"></i>
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Title className="mod-heading mod-head">
            <img
<<<<<<< HEAD
              src={yellowgem}
              height="30px"
              width="30px"
              alt="gem"
              className="yellowgem"
            />
            majj
            <div className="slogan">mining for gems on the web</div>
=======
              src={purplegem}
              height="40px"
              width="40px"
              alt="gem"
              className="yellowgem"
            />
            MAJJ
>>>>>>> 70493780fa7509a3fdde71326773a0da948751dc
          </Modal.Title>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  onChange={handleInputChange}
                  name="username"
                  type="username"
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
<<<<<<< HEAD
              style={style}
=======
>>>>>>> 70493780fa7509a3fdde71326773a0da948751dc
              onClick={(handleClose, handleFormSubmit)}
            >
              Login
            </Button>
<<<<<<< HEAD
            <Button className="mod-btn" style={style} onClick={handleSetSignUp}>
=======
            <Button className="mod-btn" onClick={handleSetSignUp}>
>>>>>>> 70493780fa7509a3fdde71326773a0da948751dc
              SignUp
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default UserSignIn;
