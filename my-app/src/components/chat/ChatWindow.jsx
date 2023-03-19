import React from "react";
import { Container, Row } from "react-bootstrap";
import SimpleBar from "simplebar-react";
import ChatInput from "./ChatInput";
import Message from "./Message";
import Request from "./Request";
import "./messages.css";
import "simplebar-react/dist/simplebar.min.css";

export default function ChatWindow(props) {
  const { chats, sendMessage, handleRequest } = props;
  const chat = chats.currentChat.map((chatMessage, i) => {
    console.log(chatMessage, "chatmessage before decision");
    if (chatMessage.subject === "Request") {
      console.log(chatMessage, "chatmessage in request");
      return (
        <Request
          key={`messages_${i}`}
          currentContact={chats.currentContact}
          requestMessage={chatMessage}
        />
      );
    } else {
      return (
        <Message
          key={`messages_${i}`}
          currentContact={chats.currentContact}
          chatMessage={chatMessage}
        />
      );
    }
  });

  return (
    <>
      <SimpleBar>
        <Container className="card card-body chat-window pb-5">
          <Row>{chat}</Row>
          <Container className="position-absolute bottom-0 start-50 translate-middle-x mb-3">
            <Row>
              <ChatInput
                chats={chats}
                sendMessage={sendMessage}
                handleRequest={handleRequest}
              />
            </Row>
          </Container>
        </Container>
      </SimpleBar>
    </>
  );
}
