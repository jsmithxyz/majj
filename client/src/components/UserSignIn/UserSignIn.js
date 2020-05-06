import React, { useState, useEffect } from "react";
import "./UserSignIn.css";
import { useStoreContext } from "../../utils/GlobalState";
import { Modal, Button, Form } from "react-bootstrap";
import purplegem from "../../img/purplegem.png";
import {
  SIGN_IN,
  SIGN_OUT,
  ADD_USER,
  FILTER_CHANGE,
} from "../../utils/actions";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import { Col, Row } from "react-bootstrap";
import useSnackbar from "react-snackbar-toast";

function UserSignIn() {
  const [state, dispatch] = useStoreContext();
  const [signUp, setSignUp] = useState("");
  const [show, setShow] = useState(false);
  // use this for user info?
  const [formObject, setFormObject] = useState({});
  const [errorState, setErrorState] = useState({});
  const { mutateFilter } = state;
  const [rows, setRows] = useState();
  const { addToast } = useSnackbar();

  const [userFilter, setUserFilter] = useState(mutateFilter);

  const handleRadioChange = (event) => {
    const { name, checked } = event.target;
    // console.log(name + ": " + checked);
    setUserFilter({ ...userFilter, [name]: checked });
    let filterString = JSON.stringify(userFilter);
    setFormObject({ ...formObject, userFilter: filterString });
    console.log(formObject);
  };

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

    if (result.status === 400) {
      // if register fails
      // ! this is super gross how do i fix it?
      let error =
        result.data.email ||
        result.data.password ||
        result.data.password2 ||
        result.data.name;
      // set a local error state to use to display to user
      setErrorState({ error: error });
      addToast(error, {
        autoDismissTime: 3000,
        className: "customToast",
      });
    } else {
      handleClose();
      addToast("Welcome to Majj!", {
        autoDismissTime: 3000,
        className: "customToast",
      });
    }
  }

  async function handleLoginSubmit(event) {
    event.preventDefault();

    API.loginUser(formObject).then((result) => {
      if (result.status === 200) {
        handleClose();
        addToast(`Welcome, ${result.data.name}!`, {
          autoDismissTime: 3000,
          className: "customToast",
        });
        dispatch({
          type: SIGN_IN,
          user: result.data,
        });
      } else {
        console.log(JSON.stringify(result));
        addToast("Username or password incorrect. Please try again.", {
          autoDismissTime: 3000,
          className: "customToast",
        });
      }
    });
  }

  const checkboxMaker = (key, value) => {
    return (
      <Col md={4} className="choices-col">
        <Form.Check
          label={key}
          name={key}
          id={key}
          type={"checkbox"}
          className={`default-checkbox`}
          onChange={handleRadioChange}
        />
      </Col>
    );
  };

  const checkboxArrayMaker = () => {
    let topics = Object.keys(mutateFilter);
    let checkboxes = topics.map((key) => {
      let checkedValue = mutateFilter[key];
      return checkboxMaker(key, checkedValue);
    });
    let newRows = [];
    for (var i = 0; i < checkboxes.length; i++) {
      let checkboxRow = (
        <Row className="rad-row">
          {checkboxes[i]}
          {checkboxes[i + 1]}
          {checkboxes[i + 2]}
        </Row>
      );
      newRows.push(checkboxRow);
      i = i + 2;
    }
    return newRows;
  };

  useEffect(() => {
    let newRows = checkboxArrayMaker();
    setRows(newRows);
  }, [mutateFilter]);

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
            <b>
              Pick a few topics below to add to your profile & start your
              diggin'
            </b>
            <div>{rows}</div>
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
