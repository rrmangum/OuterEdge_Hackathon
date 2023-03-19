import React from "react";
import { Navbar, Nav, Container, Row, Col, Image } from "react-bootstrap";
import logo from "../assets/images/logos/green-flame.png";
import "./layouts.css";

export default function NavBar() {
  return (
    <>
      <Navbar>
        <Container>
          <Row>
            <Col>
              <Navbar.Brand href="/">
                <Image src={logo} alt="logo" className="navbar-logo" />
              </Navbar.Brand>
            </Col>
            <Col>
              <Nav>
                <Nav.Item as="li" className="mx-lg-1">
                  <Nav.Link href="/twitch" className="active text-white">
                    Streamers
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
}
