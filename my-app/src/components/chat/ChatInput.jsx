import React, { useState } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import { FaPaperPlane } from "react-icons/fa";
import { FaTags } from "react-icons/fa";
import "./messages.css";

const defaultMsg = {
  messageText: "",
  subject: "chathub",
  recipientId: 2,
  senderId: 1,
};

export default function ChatInput(props) {
  const { sendMessage } = props;
  const [chatMessage, setChatMessage] = useState(defaultMsg);

  const onSubmit = () => {
    const isMessageProvided =
      chatMessage.messageText && chatMessage.messageText !== "";
    const isSubjectIdProvided =
      chatMessage.subject && chatMessage.subject !== "";
    const isRecipientIdProvided =
      chatMessage.recipientId && chatMessage.recipientId !== "";
    const isSenderIdProvided =
      chatMessage.senderId && chatMessage.senderId !== "";
    if (
      isMessageProvided &&
      isSubjectIdProvided &&
      isRecipientIdProvided &&
      isSenderIdProvided
    ) {
      setChatMessage(defaultMsg);
      sendMessage(chatMessage);
    } else {
      console.info("Please insert a message.");
    }
  };

  const handleRequest = () => {
    props.handleRequest();
  };

  const onMessageUpdate = (e) => {
    setChatMessage((prevState) => {
      const msg = { ...prevState };
      msg.messageText = e.target.value;
      msg.subject = "Chathub";
      msg.recipientId = 2;
      msg.senderId = 1;
      return msg;
    });
  };

  return (
    <>
      <Container className="chat-input-container rounded">
        <Row>
          <Formik
            enableReinitialize={true}
            initialValues={chatMessage}
            onSubmit={onSubmit}
          >
            <Form>
              <Field
                type="text"
                name="messageText"
                className="form-control w-75 float-start"
                placeholder="Enter your message"
                onChange={onMessageUpdate}
              />

              <Button type="submit" variant="success" className="float-end">
                <FaPaperPlane />
              </Button>
              <Button
                type="button"
                variant="primary"
                className="float-end me-2"
                onClick={handleRequest}
              >
                <FaTags />
              </Button>
            </Form>
          </Formik>
        </Row>
      </Container>
    </>
  );
}
