import React from "react";
import { Container, Row } from "react-bootstrap";
import { format } from "date-fns";
import { CompanyName } from "../assets/content/content";
import "./layouts.css";

export default function Footer() {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container>
        <Row>
          <p className="text-white text-center">
            © {format(new Date(), "yyyy")} {CompanyName}&trade;
          </p>
        </Row>
      </Container>
    </>
  );
}
