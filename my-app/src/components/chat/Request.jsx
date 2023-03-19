import React from "react";
import { Card, Button, Image } from "react-bootstrap";
import { format } from "date-fns";
import "./messages.css";

export default function Request(props) {
  const handleAccept = () => {
    props.handleAccept(props.requestMessage);
  };

  const handleDeny = () => {
    props.handleDeny(props.requestMessage);
  };

  return (
    <>
      <Card className="chat-card m-2">
        <Card.Body>
          <Card.Title>Brand Request</Card.Title>
          <Card.Text className="my-0">
            <span className="chat-card-bold">Influencer:</span>{" "}
            {props.requestMessage.sender
              ? props.requestMessage.sender
              : "Mr. Beast"}
          </Card.Text>
          <Card.Text className="my-0">
            <span className="chat-card-bold">Brand:</span>{" "}
            {props.requestMessage.recipient
              ? props.requestMessage.recipient
              : "Patrik's Sport Shop"}
          </Card.Text>
          <Card.Text className="my-0">
            <span className="chat-card-bold">Request Date:</span>{" "}
            {props.requestMessage.date
              ? format(new Date(props.requestMessage.date), "MMMM d, yyyy")
              : "March 20, 2023"}
          </Card.Text>
          <Card.Text className="mt-0">
            <span className="chat-card-bold">Request:</span>{" "}
            {props.requestMessage.messageText
              ? props.requestMessage.messageText
              : "We would like for you to provide us an image of you using our brand name item. It is the best item."}
          </Card.Text>
          <Image
            src={props.requestMessage.mediaUrl}
            alt="request_media"
            className="request-img mb-3"
          />
          <Button variant="danger" onClick={handleDeny}>
            Deny
          </Button>
          <Button variant="success" onClick={handleAccept} className="ms-2">
            Accept
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
