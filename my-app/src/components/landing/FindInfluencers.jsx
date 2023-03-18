import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import socialMedia from "../../assets/images/landing/social-media.jpg";
import "./landing.css";

export default function FindInfluencers() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Image src={socialMedia} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
