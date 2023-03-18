import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import Footer from "../../layouts/Footer";
import "./twitch.css";

export default function Twitch() {
  return (
    <>
      <div className="twitch-background-image">
        <div className="twitch-banner-text">
          <p className="twitch-p mt-3">{`BoostChain`}&trade;</p>
          <p className="twitch-bottom-p">Accelerating content creators.</p>
          <Link className="btn-primary btn mb-5 twitch-button" to="/">
            Find a Home
          </Link>
        </div>
      </div>
      <Container className="mt-5">
        <h1 className="text-center text-primary display-5">WHY HASTY</h1>
        <p className="text-center lead">
          Hasty makes finding the perfect home easy.
        </p>
        <Row>
          <Col>
            <Card className="card-twitch">
              <Card.Img className="card-twitch-img" variant="top" src={"img"} />
              <Card.Body>
                <Card.Title className="text-twitch">Daycare</Card.Title>
                <Card.Text>
                  Find the best daycare providers in your local area to protect
                  your kids.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card-twitch">
              <Card.Img className="card-twitch-img" variant="top" src={"img"} />
              <Card.Body>
                <Card.Title className="text-primary">Neighborhoods</Card.Title>
                <Card.Text>
                  See community statistics to make sure you move into a safe
                  neighborhood.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card-twitch">
              <Card.Img className="card-twitch-img" variant="top" src={"img"} />
              <Card.Body>
                <Card.Title className="text-twitch">Community</Card.Title>
                <Card.Text>
                  See what activities are in your local community to connect
                  with other military families.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
