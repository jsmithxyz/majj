import React, { Fragment, useRef, useState, useEffect } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_QUEUE, PASS, NEW_ITEMS } from "../../utils/actions";
import { Row, Col, Card } from "react-bootstrap";
import "./Gems.css";
import sampleItems from "../../utils/sample-items";
import Moment from "react-moment";

function Gems() {
  const [state, dispatch] = useStoreContext();
  const { items } = state;
  const [tempItems, setTempItems] = useState(sampleItems);

  const handleAddToQueue = (event) => {
    // event.preventDefault();
    const { id } = event.target;
    dispatch({
      type: ADD_TO_QUEUE,
      id: id,
    });
  };

  const handlePass = (event) => {
    // event.preventDefault();
    const { id } = event.target;
    dispatch({
      type: PASS,
      id: id,
    });
  };

  const handleOpen = (event) => {
    event.preventDefault();
    const { id } = event.target;
    window.open(items[0][id].url, "_blank");
  };

  if (items) {
    return (
      <Fragment>
        <Row className='mosaic'>
          {items[0].map((result, index) => (
            <Col key={`col${index}`} cxs={12} md={5} lg={4}>
              <Card
                className='card'
                key={`gem${index}`}
                style={{ width: "18rem" }}
              >
                <img
                  className='picture'
                  alt='thumbnail, where art thou?'
                  src={
                    result.image?.thumbnail.contentUrl ||
                    "https://media.giphy.com/media/PdfNwG98g6Sxq/source.gif"
                  }
                  height='150'
                  width='150'
                />
                <Card.Body>
                  <Card.Title className='title'>
                    <a href={result.url}>{result.name}</a>
                  </Card.Title>
                  <Card.Text className='name'>
                    {result.provider[0]["name"]}{" "}
                  </Card.Text>
                  <Card.Text className='date'>
                    <Moment fromNow>{result.datePublished}</Moment>
                  </Card.Text>
                  <Card.Text className='icons'>
                    <button>
                      <i
                        className='far fa-gem'
                        id={index}
                        onClick={handleAddToQueue}
                      ></i>
                    </button>
                    <button>
                      <i
                        className='far fa-eye'
                        id={index}
                        onClick={handleOpen}
                      ></i>
                    </button>
                    <button>
                      <i
                        className='far fa-trash-alt'
                        id={index}
                        onClick={handlePass}
                      ></i>
                    </button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <Row className='mosaic '>
          {tempItems.value.map((result, index) => (
            <Col key={`col${index}`} xs={12} md={5} lg={4}>
              <Card
                className='card'
                key={`gem${index}`}
                style={{ width: "18rem" }}
              >
                <img
                  className='picture'
                  alt='thumbnail, where art thou?'
                  src={
                    result.image?.thumbnail.contentUrl ||
                    "https://media.giphy.com/media/PdfNwG98g6Sxq/source.gif"
                  }
                  height='150'
                  width='150'
                />
                <Card.Body>
                  <Card.Title className='title'>
                    <a href={result.url}>{result.name}</a>
                  </Card.Title>
                  <Card.Text className='name'>
                    {result.provider[0]["name"]}{" "}
                  </Card.Text>
                  <Card.Text className='date'>
                    <Moment fromNow>{result.datePublished}</Moment>
                  </Card.Text>
                  <Card.Text className='icons'>
                    <button>
                      <i
                        className='far fa-gem'
                        id={index}
                        onClick={handleAddToQueue}
                      ></i>
                    </button>
                    <button>
                      <i
                        className='far fa-eye'
                        id={index}
                        onClick={handleOpen}
                      ></i>
                    </button>
                    <button>
                      <i
                        className='far fa-trash-alt'
                        id={index}
                        onClick={handlePass}
                      ></i>
                    </button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Fragment>
    );
  }
}

export default Gems;
