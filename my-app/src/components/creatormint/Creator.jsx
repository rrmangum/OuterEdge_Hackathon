import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { format } from "date-fns";

export default function Creator() {
  const { state } = useLocation();
  console.log(state);

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
    </Container>
  );
}
