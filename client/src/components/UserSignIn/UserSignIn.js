import React, { useState } from "react";
import "./UserSignIn.css";
import { useStoreContext } from "../../utils/GlobalState"
import { Modal, Button, Form } from "react-bootstrap";
import yellowgem from "../../img/yellowgem.png";
import { SIGN_IN, SIGN_OUT } from "../../utils/actions"

function UserSignIn() {
  const [state, dispatch] = useStoreContext();
  const [signUp, setSignUp] = useState("");
  const [show, setShow] = useState(false);
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

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(formObject)
    if (formObject.username && formObject.password) {
      // some user login action here
      dispatch({
        type: SIGN_IN,
        user: formObject,
      });
    }
  }

  let style = {
    backgroundColor: "#461767",
    color: "#675682",
    border: "0px",
    borderRadius: "10px",
  };

  // can this conditional be dried up somehow?
  if (signUp === "signup") {
    // load this if the user wants to sign up
    return (
      <>
        <Button className='mod-btn' style={style} onClick={handleShow}>
          <i className='fas fa-user fa-2x'></i>
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Title className='mod-heading mod-head'>
            <img
              src={yellowgem}
              height='30px'
              width='30px'
              alt='gem'
              className='yellowgem'
            />
            majj
            <div className='slogan'>mining for gems on the web</div>
          </Modal.Title>
          <Modal.Body>
            <Form>
              <Form.Group controlId='formBasicName'>
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  onChange={handleInputChange}
                  name='fullname'
                  type='name'
                  placeholder='Enter Full Name'
                />
              </Form.Group>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  onChange={handleInputChange}
                  name='email'
                  type='email'
                  placeholder='Enter Email Address'
                />
              </Form.Group>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  onChange={handleInputChange}
                  name='username'
                  type='username'
                  placeholder='Enter Username'
                />
              </Form.Group>
              <Form.Group controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={handleInputChange}
                  name='password'
                  type='password'
                  placeholder='Password'
                />
              </Form.Group>
            </Form>
            Sign up here to start digging!
          </Modal.Body>
          <Modal.Footer>
            <Button className='mod-btn' style={style} onClick=''>
              Register!
            </Button>
            <Button className='mod-btn' style={style} onClick={handleSetLogin}>
              Return to Login
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  } else {
    // return this if user wants to log in or hasn't clicked 'sign up'
    return (
      <>
        <Button className='mod-btn' style={style} onClick={handleShow}>
          <i className='fas fa-user fa-2x'></i>
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Title className='mod-heading mod-head'>
            <img
              src={yellowgem}
              height='30px'
              width='30px'
              alt='gem'
              className='yellowgem'
            />
            majj
            <div className='slogan'>mining for gems on the web</div>
          </Modal.Title>
          <Modal.Body>
            <Form>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  onChange={handleInputChange}
                  name='username'
                  type='username'
                  placeholder='Enter Username'
                />
              </Form.Group>
              <Form.Group controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={handleInputChange}
                  name='password'
                  type='password'
                  placeholder='Password'
                />
              </Form.Group>
            </Form>
            Never been here before? Click Sign Up to get started!
          </Modal.Body>
          <Modal.Footer>
            <Button
              className='mod-btn'
              style={style}
              onClick={(handleClose, handleFormSubmit)}
            >
              Login
            </Button>
            <Button className='mod-btn' style={style} onClick={handleSetSignUp}>
              SignUp
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default UserSignIn;
