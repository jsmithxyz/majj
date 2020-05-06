import React, { useState, useEffect, useRef } from "react";
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

  const [formObject, setFormObject] = useState({});
  const [errorState, setErrorState] = useState({});
  const { mutateFilter } = state;
  const [rows, setRows] = useState();
  const { addToast } = useSnackbar();

  let filterTemplate = { ...mutateFilter };

  // How can I DRY this up?
  const refs = [];
  const ref0 = useRef(null);
  refs.push(ref0);
  const ref1 = useRef(null);
  refs.push(ref1);
  const ref2 = useRef(null);
  refs.push(ref2);
  const ref3 = useRef(null);
  refs.push(ref3);
  const ref4 = useRef(null);
  refs.push(ref4);
  const ref5 = useRef(null);
  refs.push(ref5);
  const ref6 = useRef(null);
  refs.push(ref6);
  const ref7 = useRef(null);
  refs.push(ref7);
  const ref8 = useRef(null);
  refs.push(ref8);
  const ref9 = useRef(null);
  refs.push(ref9);
  const ref10 = useRef(null);
  refs.push(ref10);
  const ref11 = useRef(null);
  refs.push(ref11);
  const ref12 = useRef(null);
  refs.push(ref12);
  const ref13 = useRef(null);
  refs.push(ref13);
  const ref14 = useRef(null);
  refs.push(ref14);
  const ref15 = useRef(null);
  refs.push(ref15);
  const ref16 = useRef(null);
  refs.push(ref16);
  const ref17 = useRef(null);
  refs.push(ref17);
  const ref18 = useRef(null);
  refs.push(ref18);
  const ref19 = useRef(null);
  refs.push(ref19);
  const ref20 = useRef(null);
  refs.push(ref20);
  const ref21 = useRef(null);
  refs.push(ref21);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // Below two lines will manage user login state. if they want to sign up, this controls sign up form.
  // If they want to sign in, this controls sign in form.
  const handleSetSignUp = () => setSignUp("signup");
  const handleSetLogin = () => setSignUp("login");

  async function handleRegisterSubmit(event) {
    event.preventDefault();
    for (const ref of refs) {
      let { name, checked } = ref.current;
      filterTemplate[name] = checked;
    }

    let filterString = JSON.stringify(filterTemplate);

    formObject.filter = filterString;
    let result = await API.registerUser(formObject);

    if (result.status === 400) {
      // if register fails
      // Can this error handling be dried up?
      let error =
        result.data.email ||
        result.data.password ||
        result.data.password2 ||
        result.data.name;
      // set a local error state to use to display to user
      setErrorState({ error: error });
      document.getElementById("error-message").innerHTML = error;
    } else {
      let loginEvent = {
        preventDefault() {
          return;
        },
      };
      handleLoginSubmit(loginEvent);
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
        document.getElementById("error-message").innerHTML =
          "Email or password incorrect. Please try again.";
      }
    });
  }

  const checkboxMaker = (key, index) => {
    return (
      <Col md={4} className="choices-col">
        <Form.Check
          label={key}
          name={key}
          ref={refs[index]}
          id={key}
          type={"checkbox"}
          className={`default-checkbox`}
        />
      </Col>
    );
  };

  const checkboxArrayMaker = () => {
    let topics = Object.keys(mutateFilter);
    let checkboxes = topics.map((key, index) => {
      return checkboxMaker(key, index);
    });
    let newRows = [];
    for (var i = 0; i < checkboxes.length; i++) {
      let checkboxRow = (
        <Row className="rad-row" key={i}>
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
  }, []);

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

            <div id="error-message"></div>
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
            </Form>
            <div id="error-message"></div>
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
