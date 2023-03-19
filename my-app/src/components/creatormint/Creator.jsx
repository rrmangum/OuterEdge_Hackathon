import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { format } from "date-fns";

export default function Creator() {
  const { state } = useLocation();

  const handleDeny = () => {};
  const handleAccept = () => {};

  return (
    <Container>
      <Row>
        <Col>
          <h4 className="text-white">Review Current Request</h4>
          <p className="text-white py-0 my-0">{state.payload.influencer}</p>
          <p className="text-white py-0 my-0">{state.payload.brand}</p>
          <p className="text-white py-0 my-0">
            {format(new Date(state.payload.date), "MMMM d, yyyy")}
          </p>
          <p className="text-white py-0 my-0">{state.payload.request}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="danger" className="mt-2 me-2" onClick={handleDeny}>
            Deny
          </Button>
          <Button variant="success" className="mt-2" onClick={handleAccept}>
            Accept
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
