import React from "react";
import "./UserProfile.css";
import { Container, Row, Col, Image } from "react-bootstrap";

function UserProfile() {
  return (
    <Container className="usercontainer animated fadeInUp delay-2s">
      <Row>
        <Col xs={12} md={5} lg={4}>
          <h2>
            <b>your saved gems: </b>
          </h2>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={5} lg={4}>
          <div className="saved-gem">
            <div className="gem-image">
              <Image
                src="https://media.giphy.com/media/PdfNwG98g6Sxq/source.gif"
                height="150px"
                width="150px"
              />
            </div>
            <div className="gem-title gem-title-white">
              <a
                href="https://www.wafb.com/2020/04/10/easter-crafts-you-family/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Easter crafts for you and the family
              </a>
            </div>
          </div>
        </Col>
        <Col xs={12} md={5} lg={4}>
          <div className="saved-gem">
            <div className="gem-image">
              <Image
                src="https://www.bing.com/th?id=ON.52D4CAEF8ADD63D3794A8B49BA5B636B&amp;pid=News"
                height="150px"
                width="150px"
              />
            </div>
            <div className="gem-title gem-title-white">
              <a
                href="https://www.usmagazine.com/celebrity-news/news/cady-groves-brother-claps-back-at-troll-questioning-cause-of-death/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cady Groves’ Brother Cody Claps Back at Troll Questioning the
                Country Singer’s Cause of Death
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default UserProfile;
