import React, { useState } from "react";
import { Modal, Container, Button } from "react-bootstrap";
import Brand from "../brandrequest/Brand";
import "./twitch.css";

export default function Twitch() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Request Content from Influencer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Brand />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Request</Button>
        </Modal.Footer>
      </Modal>
      <div className="twitch-background-image">
        <div className="twitch-banner-text">
          <p className="twitch-p mt-3"></p>
          <p className="twitch-bottom-p"></p>
        </div>
      </div>
      <Container className="mt-5">
        <h1 className="text-center text-primary display-5">TOP STREAMERS</h1>
        <p className="text-center lead">
          Accelerating content creators Brand Exposure.
        </p>
        <table class="table">
          <thead>
            <tr class="twitch-table-header">
              <th>RANK</th>
              <th>Streamer</th>
              <th />
              <th />
              <th />
              <th>AVG VIEWERS</th>
              <th>TIME STREAMED</th>
              <th>ALL TIME PEAK VIEWERS</th>
              <th>HOURS WATCHED</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span class="badge text-bg-warning rounded-pill">1</span>
              </td>
              <td>
                <img
                  class="img-twitch"
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/cc310a6e-8cee-435b-af4c-5b480b791037-profile_image-300x300.png"
                  alt="top streamer"
                />
              </td>

              <td>KINGSLEAGUE</td>

              <td></td>
              <td></td>
              <td>213,562</td>
              <td>53.3 hours</td>
              <td>906,000</td>
              <td>11.4M</td>
            </tr>
            <tr>
              <td>
                <span class="badge text-bg-warning rounded-pill">2</span>
              </td>
              <td>
                <img
                  class="img-twitch"
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/xqc-profile_image-9298dca608632101-300x300.jpeg"
                  alt="top streamer"
                />
              </td>
              <td>A second list item</td>
              <td></td>
              <td></td>
              <td>57,234</td>
              <td>220.2 hours</td>
              <td>278,176</td>
              <td></td>
            </tr>
            <tr>
              <td>
                <span class="badge text-bg-warning rounded-pill">3</span>
              </td>
              <td>
                <img
                  class="img-twitch"
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/f207b3aa-179d-487b-addf-a09e81b440fd-profile_image-300x300.png"
                  alt="top streamer"
                />
              </td>
              <td>A third list item</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </Container>
    </>
  );
}
