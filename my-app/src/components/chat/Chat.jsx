import React, { useState, useEffect, useRef } from "react";
import { HubConnectionBuilder } from "@microsoft/signalr";
import { init } from "../../services/Web3Client";
import { Modal, Container, Row, Col, Button } from "react-bootstrap";
import ChatWindow from "./ChatWindow";
import ChatLog from "./ChatLog";
import ContactCard from "./ContactCard";
import Brand from "../brandrequest/Brand";
import CreatorMint from "../creator/Creator";

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
  const [brandWallet, setBrandWallet] = useState("");
  const [creatorWallet, setCreatorWallet] = useState("");
  const [handlers, setHandlers] = useState(defaultHandlers);
  const [show, setShow] = useState(false);
  const [creatorShow, setCreatorShow] = useState(false);

  const latestChat = useRef(null);

  latestChat.current = chats.currentChat;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCreatorClose = () => setCreatorShow(false);

  useEffect(() => {
    const newConnection = new HubConnectionBuilder()
      .withUrl(`https://localhost:7047/chat`)
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
        console.log("chatMessage right before being sent", chatMessage);
        await connection.send("SendMessage", chatMessage);
      } catch (error) {
        errHandler(error);
      }
    } else {
      console.error("No connection to server yet.");
    }
  };

  const handleConnect = () => {
    init().then(onInitSuccess);
  };

  const onInitSuccess = (response) => {
    setBrandWallet(response);
  };

  useEffect(() => {
    console.log(brandWallet);
  }, [brandWallet]);

  const handleCreatorConnect = () => {
    init().then(onCreatorInitSuccess);
  };

  const onCreatorInitSuccess = (response) => {
    setCreatorWallet(response);
  };

  useEffect(() => {
    console.log(creatorWallet);
  }, [creatorWallet]);

  const handleRequest = () => {
    handleShow();
  };

  const sendRequest = (values) => {
    let requestMessage = {
      messageText: values.request,
      subject: "Request",
      recipient: values.brand,
      sender: values.influencer,
      date: values.date,
      mediaUrl: values.mediaUrl,
    };
    sendMessage(requestMessage);
    handleClose();
  };

  const handleAccept = (requestMessage) => {
    setCreatorShow(true);
  };

  const handleDeny = (requestMessage) => {
    console.log(requestMessage, "requestMessage");
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
          <Brand sendRequest={sendRequest} />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={handleConnect}
            className="me-5"
            disabled={brandWallet && brandWallet !== "" ? true : false}
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
            disabled={brandWallet && brandWallet !== "" ? false : true}
          >
            Request
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={creatorShow}
        onHide={handleCreatorClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Issue Brand Approval</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreatorMint
            brandWallet={brandWallet}
            setCreatorShow={setCreatorShow}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCreatorClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Container>
        <Row>
          <Col className="col-3">
            <ChatLog />
          </Col>
          <Col className="col-6">
            <ChatWindow
              chats={chats}
              sendMessage={sendMessage}
              handleRequest={handleRequest}
              handleAccept={handleAccept}
              handleDeny={handleDeny}
            />
          </Col>
          <Col className="col-3">
            <ContactCard />
          </Col>
        </Row>
      </Container>
    </>
  );
}
