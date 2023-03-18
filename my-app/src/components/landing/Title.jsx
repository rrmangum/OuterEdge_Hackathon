import React from "react";
import { Container, Row } from "react-bootstrap";
import { CompanyName } from "../../assets/content/content";
import "./landing.css";

export default function Title() {
  return (
    <>
      <Container>
        <Row>
          <div className="text-white landing-title">{CompanyName}&trade;</div>
        </Row>
      </Container>
    </>
  );
}
