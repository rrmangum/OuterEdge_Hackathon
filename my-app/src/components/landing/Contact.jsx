import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./landing.css";

export default function FindInfluencers() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1 className="text-white">Connect with Creators</h1>
            <p className="text-white">
              Connect with the influencer that best represents your brand. By
              using our brand-focused messenger, you can communicate directly
              with the influencer of your choice. The messenger will allow you
              to send large amounts of content and sign contracts without having
              to leave our platform. Through OnlyBrands, you will begin strong
              and lasting relationships which will help grow your business.
            </p>
          </Col>
          <Col className="col-auto" />
          <Col>
            <Image
              className="section-img float-end me-5"
              src="https://tinyurl.com/yc52baer"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
