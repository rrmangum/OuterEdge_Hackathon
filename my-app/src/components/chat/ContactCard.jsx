import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Image, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import {
  FaAt,
  FaPhone,
  FaLocationArrow,
  FaUsers,
  FaVideo,
} from "react-icons/fa";
import Avatar from "../../assets/images/chat/avatar.jpg";
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
          className="object-fit-cover mb-2"
          src={Avatar}
        />
      </div>
      <Card.Title className="text-center">Mr. Beast</Card.Title>
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
          <Row>
            <p className="mt-2 mb-0">
              <FaAt />
              <strong> Email:</strong>
            </p>
            <p>mrbeast@gmail.com</p>
            <p className="mt-2 mb-0">
              <FaPhone />
              <strong> Phone Number:</strong>
            </p>
            <p>+1 555-555-5555</p>
            <p className="mt-2 mb-0">
              <FaLocationArrow />
              <strong> Location:</strong>
            </p>
            <p>California, USA</p>
            <p className="mt-2 mb-1">
              <FaUsers />
              <strong> Groups:</strong>
            </p>
            <p>
              <span className="badge badge-success-lighten p-1 font-14 me-1">
                Work
              </span>
              <span className="badge badge-success-lighten p-1 font-14 me-1">
                Friends
              </span>
            </p>
          </Row>
        </Container>
      </ListGroup>
    </Card>
  );
}

ContactCard.propTypes = {
  currentContact: PropTypes.shape({
    avatarUrl: PropTypes.string,
    dateCreated: PropTypes.string,
    dateModified: PropTypes.string,
    email: PropTypes.string,
    firstName: PropTypes.string,
    id: PropTypes.number,
    isConfirmed: PropTypes.bool,
    lastName: PropTypes.string,
    mi: PropTypes.string,
    statusId: PropTypes.number,
  }),
  onEmail: PropTypes.func.isRequired,
};
