import React from "react";
import { Container, Row } from "react-bootstrap";
import FindInfluencers from "./FindInfluencers";
import Contact from "./Contact";
import "./landing.css";
import Title from "./Title";

export default function Landing() {
  return (
    <>
      <Container className="landing-bg-dark">
        <br />
        <br />
        <Row>
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
