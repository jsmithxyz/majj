import React, { Fragment } from "react";
import { Row, Col, Card } from "react-bootstrap";
import "./Gems.css";
import Moment from "react-moment";

function Gems(props) {
  return (
    <Fragment>
      <Row className="mosaic ">
        {props.details.map((result) => (
          <Col xs={12} md={5} lg={4}>
            <Card className="card" style={{ width: "18rem" }}>
              <img
                className="picture"
                alt="thumbnail, where art thou?"
                src=""
                height="150"
                width="150"
              />
              <Card.Body>
                <Card.Title className="title">
                  <a href={result.url}>{result.name}</a>
                </Card.Title>
                <Card.Text className="name">
                  {result.provider["0"]["name"]}{" "}
                </Card.Text>
                <Card.Text className="date">
                  <Moment fromNow>{result.datePublished}</Moment>
                </Card.Text>

                <Card.Text className="icons">
                  <button>
                    <i class="far fa-gem"></i>
                  </button>
                  <button>
                    <i class="far fa-eye"></i>
                  </button>
                  <button>
                    <i class="far fa-trash-alt"></i>
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

export default Gems;
