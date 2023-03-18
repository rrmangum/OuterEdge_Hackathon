import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { subDays } from "date-fns";
import socialMedia from "../../assets/images/landing/meeting-influencer.jpg";
import "./landing.css";

const data = [];
for (let num = 30; num >= 0; num--) {
  data.push({
    date: subDays(new Date(), num).toISOString().substr(0, 10),
    value: 250000 + Math.random() * 500000,
  });
}

export default function FindInfluencers() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1 className="text-white">InstaConnect&trade;</h1>
            <p className="text-white">
              Connect directly with your influencer of choice. Utilize our brand
              focused messenger. Chat back and forth, send large content, and
              even sign contracts directly with your influencer. Get ready to
              build a strong, lasting relationship to grow your business.
            </p>
          </Col>
          <Col className="col-auto" />
          <Col>
            <Image className="section-img float-end me-5" src={socialMedia} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
