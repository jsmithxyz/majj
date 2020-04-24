import React, { Fragment, useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState"
import { ADD_TO_QUEUE, PASS } from "../../utils/actions";
import { Row, Col, Card } from "react-bootstrap";
import "./Gems.css";
import Moment from "react-moment";

function Gems(props) {  
  const [state, dispatch] = useStoreContext();
  // const id = "dummyID"; // temporary to allow compile

  const handleAddToQueue = event => {
    event.preventDefault();
    const { id } = event.target;
    // console.log("woof")
    dispatch({ 
      type: ADD_TO_QUEUE,
      _id: id 
    });

  };

  const handlePass = event => {
    event.preventDefault();
    const { id } = event.target;
    // console.log("woof")
    dispatch({ 
      type: PASS,
      _id: id
    });

  };

  const handleOpen = event => {
    event.preventDefault();
    const { id } = event.target;
    // console.log("woof")
    // open in new tab

  };

  return (
    <Fragment>
      <div className='section '>
        <Row className='mosaic '>
          {props.details.map((result) => (
            <Col xs={12} md={3} lg={3}>
              <Card className='card' style={{ width: "18rem" }}>
                <img
                  className='picture'
                  alt='thumbnail, where art thou?'
                  src={result.image?.thumbnail.contentUrl || " "}
                  height='150'
                  width='150'
                />
                <Card.Body>
                  <Card.Title className='title'>
                    <a href={result.url}>{result.name}</a>
                  </Card.Title>
                  <Card.Text className='name'>
                    {result.provider["0"]["name"]}{" "}
                  </Card.Text>
                  <Card.Text className='date'>
                    <Moment fromNow>{result.datePublished}</Moment>
                  </Card.Text>

                  <Card.Text className='icons'>
                    <button>
                      <i className='far fa-gem' onClick={handleAddToQueue}></i>
                    </button>
                    <button>
                      <i className='far fa-eye' onClick={handleOpen}></i>
                    </button>
                    <button>
                      <i className='far fa-trash-alt' onClick={handlePass}></i>
                    </button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Fragment>
  );
}

export default Gems;
