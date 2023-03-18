import React from "react";
import { Container, Row } from "react-bootstrap";
import FindInfluencers from "./FindInfluencers";
import "./landing.css";

export default function Landing() {
  return (
    <>
      <br />
      <Container className="landing-bg-dark">
        <Row>
          <FindInfluencers />
        </Row>
      </Container>
    </>
  );
}
