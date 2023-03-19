import React from "react";
import { Container, Row } from "react-bootstrap";
import FindInfluencers from "./FindInfluencers";
import Contact from "./Contact";
import Title from "./Title";
import "./landing.css";

export default function Landing() {
  return (
    <>
      <Container className="landing-bg-dark">
        <Row className="text-center">
          <Title />
        </Row>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Row>
          <FindInfluencers />
        </Row>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Row>
          <Contact />
        </Row>
      </Container>
    </>
  );
}
