import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../assets/images/logos/blockchain-icon.jpg";
import "./layouts.css";

export default function Footer() {
  return (
    <>
      <br />
      <br />
      <footer className="py-3 footer-bkg">
        <Container>
          <Row>
            <Col lg={6}>
              {/* <img
                src={Logo}
                alt=""
                className="logo-dark footer-logo-alt"
                height="70"
              /> */}
              {/* <p className="text-white mt-1"></p>
              <ul className="social-list list-inline mt-1">
                <li className="list-inline-item text-center">
                  <Link
                    to={{ pathname: "https://www.facebook.com" }}
                    className="social-list-item border-primary text-primary bg-white"
                  >
                    <i className="mdi mdi-facebook"></i>
                  </Link>
                </li>
                <li className="list-inline-item text-center">
                  <Link
                    to={{ pathname: "https://www.google.com" }}
                    className="social-list-item border-dark text-dark bg-white"
                  >
                    <i className="mdi mdi-google"></i>
                  </Link>
                </li>
                <li className="list-inline-item text-center">
                  <Link
                    to={{ pathname: "https://www.twitter.com" }}
                    className="social-list-item border-info text-info bg-white"
                  >
                    <i className="mdi mdi-twitter"></i>
                  </Link>
                </li>
                <li className="list-inline-item text-center">
                  <Link
                    to={{ pathname: "https://www.instagram.com" }}
                    className="social-list-item border-danger text-secondary bg-white"
                  >
                    <i className="mdi mdi-instagram"></i>
                  </Link>
                </li>
              </ul> */}
            </Col>
            <Col lg={2} className="mt-3 mt-lg-0">
              <h5 className="text-white">BoostChain</h5>
              <ul className="list-unstyled ps-0 mb-0 mt-1">
                <li className="mt-1">
                  <Link to="/" className="text-white">
                    About Us
                  </Link>
                </li>
                <li className="mt-1">
                  <Link to="/" className="text-white">
                    Smart Contracts
                  </Link>
                </li>
                <li className="mt-1">
                  <Link to="/" className="text-white">
                    Subscriptions
                  </Link>
                </li>
              </ul>
            </Col>
            <Col lg={2} className="mt-3 mt-lg-0">
              <h5 className="text-white">Discover</h5>
              <ul className="list-unstyled ps-0 mb-0 mt-1">
                <li className="mt-1">
                  <Link to="/blogs" className="text-white">
                    Blogs
                  </Link>
                </li>
                <li className="mt-1">
                  <Link to="/" className="text-white">
                    Podcasts
                  </Link>
                </li>
                <li className="mt-1">
                  <Link to="/" className="text-white">
                    Chat
                  </Link>
                </li>
                <li className="mt-1">
                  <Link to="/" className="text-white">
                    Video Chat
                  </Link>
                </li>
              </ul>
            </Col>
            <Col lg={2} className="mt-3 mt-lg-0">
              <h5 className="text-white">Support</h5>
              <ul className="list-unstyled ps-0 mb-0 mt-1">
                <li className="mt-1">
                  <Link to="/contactus" className="text-white">
                    Contact Us
                  </Link>
                </li>
                <li className="mt-1">
                  <Link to="/" className="text-white">
                    FAQ
                  </Link>
                </li>
                <li className="mt-1">
                  <Link to="/" className="text-white">
                    Privacy
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="mt-1">
                <p className="text-light mt-3 text-center mb-0">
                  © 2023 BoostChain. Accelerating content creators..
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}