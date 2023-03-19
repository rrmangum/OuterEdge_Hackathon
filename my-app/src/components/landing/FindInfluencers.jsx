import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./landing.css";

export default function FindInfluencers() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Image className="section-img" src="https://tinyurl.com/yc5rhbjh" />
          </Col>
          <Col>
            <h1 className="text-white">Find Creators for Your Brand</h1>
            <p className="text-white">
              Discover creators that share your vision to represent your brand!
              Browse through a catalog of creator profiles and view their
              statistics- including their average amount of viewers, time
              streamed, peak viewers, and hours watched. Select the content
              creator who best suits your brand's needs.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
