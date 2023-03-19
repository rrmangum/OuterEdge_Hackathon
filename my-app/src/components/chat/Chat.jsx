import React, { useState, useEffect, useRef } from "react";
import { HubConnectionBuilder } from "@microsoft/signalr";
import { init } from "../../services/Web3Client";
import { Modal, Container, Row, Col, Button } from "react-bootstrap";
import ChatWindow from "./ChatWindow";
import Brand from "../brandrequest/Brand";

const defaultChats = {
  currentChat: [],
  currentContact: {},
  recentChats: [],
  previewMessageCards: [],
};

const defaultHandlers = { response: [], err: [] };

export default function Chat(props) {
  const [connection, setConnection] = useState(null);
  const [chats, setChats] = useState(defaultChats);
  const [wallet, setWallet] = useState("");
  const [handlers, setHandlers] = useState(defaultHandlers);
  const [show, setShow] = useState(false);

  const latestChat = useRef(null);

  latestChat.current = chats.currentChat;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const newConnection = new HubConnectionBuilder()
      .withUrl(`https://localhost:50001/hubs/chat`)
      .withAutomaticReconnect()
      .build();
    setConnection(newConnection);
  }, []);

  useEffect(() => {
    if (connection) {
      connection.start().then(onStartSuccess).catch(onStartError);
    }
  }, [connection]);

  const onStartSuccess = () => {
    connection.on("ReceiveMessage", (message) => {
      const updatedChat = [...latestChat.current];
      updatedChat.push(message);
      setChats((prevState) => {
        const chat = { ...prevState };
        chat.currentChat = updatedChat;
        return chat;
      });
    });
  };

  const onStartError = () => {
    console.error("Connection failed: ");
  };

  const sendMessage = async (chatMessage) => {
    if (connection._connectionStarted) {
      try {
        await connection.send("SendMessage", chatMessage);
      } catch (error) {
        errHandler(error);
      }
    } else {
      console.error("No connection to server yet.");
    }
  };

  const handleConnect = () => {
    console.log("handleConnect");
    init().then(onInitSuccess);
  };

  const onInitSuccess = (response) => {
    setWallet(response);
  };

  useEffect(() => {
    console.log("wallet useEffect", wallet);
  }, [wallet]);

  const handleRequest = () => {
    handleShow();
  };

  const errHandler = (error) => {
    if (handlers.err.length > 5) {
      handlers.err.pop();
    }
    setHandlers((prevState) => {
      const err = { ...prevState };
      err.err.push(error);
      return err;
    });
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Request Content From Influencer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Brand />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={handleConnect}
            className="me-5"
            disabled={wallet && wallet !== "" ? true : false}
          >
            Connect Wallet
          </Button>
          <span className="me-5"></span>
          <span className="me-5"></span>
          <span className="me-1"></span>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="success"
            type="submit"
            form="brandform"
            disabled={wallet && wallet !== "" ? false : true}
          >
            Request
          </Button>
        </Modal.Footer>
      </Modal>
      <Container>
        <Row>
          <Col className="col-5">
            <ChatWindow
              chats={chats}
              sendMessage={sendMessage}
              handleRequest={handleRequest}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
