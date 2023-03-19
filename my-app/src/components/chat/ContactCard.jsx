import React from "react";
import { Container, Row, Image, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { FaVideo } from "react-icons/fa";
import Avatar from "../../assets/images/chat/influencer.png";
import "./messages.css";

export default function ContactCard() {
  return (
    <Card className="contact-card card-body friend-info-card">
      <div className="text-center">
        <Image
          variant="top"
          fluid={true}
          roundedCircle={true}
          thumbnail={true}
          className="object-fit-cover avatar-md mt-2 mb-2"
          src={Avatar}
        />
      </div>
      <Card.Title className="text-center">Kings League</Card.Title>
      <div className="text-center">
        <Button className="w-60 mb-1" variant="primary">
          <FaVideo /> Video Chat
        </Button>
      </div>
      <Card.Text className="text-center chat-font-smaller">
        Last Interacted: 5:30pm
      </Card.Text>
      <hr className="w-75 ms-4" />
      <ListGroup className="list-group-flush">
        <Container>
          <Row></Row>
        </Container>
      </ListGroup>
    </Card>
  );
}
