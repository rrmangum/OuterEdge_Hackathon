import React from "react";
import { Card } from "react-bootstrap";
import { GrDocumentVerified } from "react-icons/gr";
import "../landing.css";

export default function MessageCard(props) {
  return (
    <>
      <Card className="card-highlighted apps-card">
        <Card.Body className="message-card">
          <Card.Subtitle className="mb-0 text-white">
            {props.name}
          </Card.Subtitle>
          <Card.Text className="mb-2 text-white">{props.message}</Card.Text>
          <GrDocumentVerified />
        </Card.Body>
      </Card>
    </>
  );
}
