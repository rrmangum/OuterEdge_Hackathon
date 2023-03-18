import React from "react";
import Loki from "react-loki";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { Container, Row, Col, Image } from "react-bootstrap";
import { CompanyName } from "../../assets/content/content";
import Default from "../../layouts/Default";
import logo from "../../assets/images/logos/green-flame.png";
import "./landing.css";

const customSteps = [
  {
    label: "Add Listing Information",
    icon: <BsFillHouseDoorFill />,
    element: <Default />,
  },
];

export default function Title() {
  return (
    <>
      <Container>
        <Row>
          <Col className="col-auto px-0 mx-0">
            <Image src={logo} alt="logo" className="landing-logo" />
          </Col>
          <Col className="px-0 mx-0">
            <div className="text-white landing-title">{CompanyName}&trade;</div>
          </Col>
          <Col>
            <Loki
              steps={customSteps}
              backLabel={"Back"}
              nextLabel={"Next"}
              noActions
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
