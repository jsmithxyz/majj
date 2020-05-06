import React, { useState, useEffect } from "react";
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
import { Link } from "react-router-dom";
import SavedGems from "../SavedGems/SavedGems";

function LeftNav() {
  const [state, dispatch] = useStoreContext();
  const { filter, mutateFilter, user } = state;
  const [rows, setRows] = useState();

  const handleRadioChange = (event) => {
    const { name, checked } = event.target;
    // console.log(name + ": " + checked);
    dispatch({
      type: FILTER_CHANGE,
      topic: name,
      value: checked,
    });
  };

  const handleApplyFilter = (event) => {
    dispatch({
      type: APPLY_FILTER,
      filter: { ...mutateFilter },
    });
  };

  const checkboxMaker = (key, value) => {
    return (
      <Col md={4} className='choices-col'>
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
        <Row className='rad-row'>
          {checkboxes[i]}
          {checkboxes[i + 1]}
        </Row>
      );
      newRows.push(checkboxRow);
      i++;
    }
    return newRows;
  };

  const applyFilter = (filter) => {
    Object.keys(filter).map((key) => {
      if (document.getElementById(key)) {
        document.getElementById(key).checked = filter[key];
      }
    });
  };

  useEffect(() => {
    // let parsedUserFilter = JSON.parse(user.filter)
    // console.log(parsedUserFilter)
    // applyFilter(parsedUserFilter);
    // dispatch({
    //   type: APPLY_FILTER,
    //   filter: parsedUserFilter,
    // });
  }, []);

  useEffect(() => {
    let newRows = checkboxArrayMaker();
    setRows(newRows);
  }, [mutateFilter]);

  useEffect(() => {
    applyFilter(filter);
  }, [filter]);

  return (
    <Col xs={4} md={3} lg={3} className='animated fadeIn delay-2s side-nav'>
      <div className='prof-signout'>
        <UserSignIn />
        <Button className='sign-out'>
          <OverlayTrigger
            key='bottom'
            placement='bottom'
            overlay={<Tooltip id={`tooltip-bottom`}>sign out</Tooltip>}
          >
            <i class='fas fa-sign-out-alt fa-2x'></i>
          </OverlayTrigger>
        </Button>
        <SavedGems />
      </div>
      <div className='create-heading'>choose your topics below:</div>
      <Form>
        <div key={`default-checkbox`} className='choices'>
          {rows}
        </div>
        <br />
        <Button className='apply-btn' onClick={handleApplyFilter}>
          Apply
        </Button>
      </Form>
    </Col>
  );
}

export default LeftNav;
