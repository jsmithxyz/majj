import React, { Fragment, useRef, useState, useEffect } from "react";
import { useStoreContext } from "../../utils/GlobalState"
import { ADD_TO_QUEUE, PASS } from "../../utils/actions";
import { Row, Col, Card } from "react-bootstrap";
import "./Gems.css";
import sampleItems from "../../utils/sample-items";
import Moment from "react-moment";

function Gems() {  
  const [state, dispatch] = useStoreContext();
  const { items } = state;
  const [tempItems, setTempItems] = useState(sampleItems);

  // const id = "dummyID"; // temporary to allow compile

  const handleAddToQueue = event => {
    event.preventDefault();
    const { id } = event.target;
    dispatch({ 
      type: ADD_TO_QUEUE,
      _id: id 
    });

  };

  const handlePass = event => {
    event.preventDefault();
    const { id } = event.target;
    // console.log(id)
    dispatch({ 
      type: PASS,
      _id: id
    });

  };

  //probably don't need
  const handleOpen = event => {
    event.preventDefault();
    const { id } = event.target;
    // console.log("woof")
    // open in new tab

  };

  useEffect(() => {
    // console.log("useEffect() on [items] in Gems")
    // console.log(items);
  }, [items]);


  if (items) {
    // console.log("if(items) path of Gems return")
    // console.log(items[0])
    return (
      <Fragment>
        <Row className='mosaic '>
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
                      <i className='far fa-gem' onClick={handleAddToQueue}></i>
                    </button>
                    <button>
                      <i className='far fa-eye' onClick={handleOpen}></i>
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
    // console.log("else path of Gems return, logging tempItems.value")
    // console.log(tempItems.value)
    return (
      <Fragment>
        <Row className='mosaic '>
          {tempItems.value.map((result, index) => (
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
                      <i className='far fa-gem' onClick={handleAddToQueue}></i>
                    </button>
                    <button>
                      <i className='far fa-eye' onClick={handleOpen}></i>
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
