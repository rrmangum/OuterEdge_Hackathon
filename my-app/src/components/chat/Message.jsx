import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import avatar from "../../assets/images/chat/avatar.png";
import "./messages.css";

const defaultSender = {
  avatarUrl: "",
  name: "",
  isCurrentUser: true,
};

export default function Message(props) {
  const { chatMessage } = props;
  const [sender, setSender] = useState(defaultSender);

  useEffect(() => {
    setSender((prevState) => {
      const newSender = { ...prevState };
      newSender.avatarUrl =
        "https://i.pinimg.com/originals/88/40/7b/88407b137f9df67cc97785d3ede2508e.jpg";
      newSender.name = "Jenny Fischer";
      newSender.isCurrentUser = true;
      return newSender;
    });
  }, []);

  return (
    <>
      {sender.isCurrentUser && (
        <Container className="message mb-1">
          <Row>
            <Col className="col-auto">
              <img
                src={avatar}
                alt="avatar"
                className="rounded-circle d-inline object-fit-cover"
              />
            </Col>
            <Col className="message-text rounded col-auto px-2 pb-0">
              <div className="message-text d-block pb-0">
                <h6 className="d-inline">{sender.name}</h6>
                <p className="d-block">{chatMessage.messageText}</p>
              </div>
            </Col>
          </Row>
        </Container>
      )}
      {!sender.isCurrentUser && (
        <Container className="message mb-1">
          <Row className="float-end">
            <Col className="message-text-response rounded col-auto px-2 pb-0">
              <div className="message-text-response d-block pb-0">
                <h6 className="d-inline">{sender.name}</h6>
                <p className="d-block">{chatMessage.messageText}</p>
              </div>
            </Col>
            <Col className="col-2">
              <img
                src={avatar}
                alt="avatar"
                className="rounded-circle d-inline object-fit-cover"
              />
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}
