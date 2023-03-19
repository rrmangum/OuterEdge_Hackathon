import React from "react";
import { Container, Row, Nav } from "react-bootstrap";
import "./twitch.css";

export default function Twitch() {
  return (
    <>
      <Row>
        <div id="twitch-video" className="video-iframe">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Efq0-521Des?controls=0&autoplay=1&mute=1&loop=1"
            title="YouTube video player"
            style={{
              transform: "scale(4.7)",
              paddingTop: "100px",
              overflow: "hidden",
            }}
          ></iframe>
        </div>
      </Row>
      <Container className="twitch-container">
        <div className="twitch-header-image">
          <div className="twitch-banner-text">
            <p className="twitch-p mt-3"></p>
          </div>
        </div>
        <h1 className="text-center text-primary display-5">TOP STREAMERS</h1>
        <p className="text-center lead text-white">
          Accelerating content creators Brand Exposure.
        </p>
        <table className="table">
          <thead>
            <tr className="twitch-table-header">
              <th>RANK</th>
              <th>Streamer</th>
              <th />
              <th />
              <th>Total Followers</th>
              <th>AVG VIEWERS</th>
              <th>TIME STREAMED</th>
              <th>ALL TIME PEAK VIEWERS</th>
              <th>HOURS WATCHED</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span className="badge text-bg-warning rounded-pill">1</span>
              </td>
              <td>
                <Nav.Link href="/chat">
                  <img
                    className="img-twitch"
                    src="https://static-cdn.jtvnw.net/jtv_user_pictures/cc310a6e-8cee-435b-af4c-5b480b791037-profile_image-300x300.png"
                    alt="top streamer"
                  />
                </Nav.Link>
              </td>

              <td className="twitch-table-row">KINGSLEAGUE</td>

              <td></td>
              <td>11.4M</td>
              <td>213,562</td>
              <td>53.3 hours</td>
              <td>906,000</td>
              <td>11.4M</td>
            </tr>
            <tr>
              <td>
                <span className="badge text-bg-warning rounded-pill">2</span>
              </td>
              <td>
                <a
                  href="https://www.twitch.tv/xqc"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="img-twitch"
                    src="https://static-cdn.jtvnw.net/jtv_user_pictures/xqc-profile_image-9298dca608632101-300x300.jpeg"
                    alt="top streamer"
                  />
                </a>
              </td>
              <td>XQC</td>
              <td></td>
              <td>22.1M</td>
              <td>57,234</td>
              <td>220.2 hours</td>
              <td>278,176</td>
              <td>12.6M</td>
            </tr>
            <tr>
              <td>
                <span className="badge text-bg-warning rounded-pill">3</span>
              </td>
              <td>
                <a
                  href="https://www.twitch.tv/lcs"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="img-twitch"
                    src="https://static-cdn.jtvnw.net/jtv_user_pictures/f207b3aa-179d-487b-addf-a09e81b440fd-profile_image-300x300.png"
                    alt="top streamer"
                  />
                </a>
              </td>
              <td>LCS</td>
              <td></td>
              <td>6.14M</td>
              <td>29,397</td>
              <td>132.7 hours</td>
              <td>400,429</td>
              <td>3.90M</td>
            </tr>
            <tr>
              <td>
                <span className="badge text-bg-warning rounded-pill">4</span>
              </td>
              <td>
                <a
                  href="https://www.twitch.tv/HASANABI"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="img-twitch"
                    src="https://static-cdn.jtvnw.net/jtv_user_pictures/107a3c5e-ab5c-4e73-81ab-b11591ee477c-profile_image-300x300.png"
                    alt="top streamer"
                  />
                </a>
              </td>

              <td>HASANABI</td>

              <td></td>
              <td>2.2M</td>
              <td>213,562</td>
              <td>53.3 hours</td>
              <td>906,000</td>
              <td>11.4M</td>
            </tr>
            <tr>
              <td>
                <span className="badge text-bg-warning rounded-pill">5</span>
              </td>
              <td>
                <img
                  className="img-twitch"
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/ab49dc0a-4b33-4dba-adb7-2a0d7ed08f3a-profile_image-300x300.png"
                  alt="top streamer"
                />
              </td>

              <td>BUSTER</td>

              <td></td>
              <td>1.8M</td>
              <td>213,562</td>
              <td>53.3 hours</td>
              <td>86,000</td>
              <td>12.4M</td>
            </tr>
            <tr>
              <td>
                <span className="badge text-bg-warning rounded-pill">6</span>
              </td>
              <td>
                <img
                  className="img-twitch"
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/74586414-e27b-4347-89c5-109e42ac3e1d-profile_image-300x300.png"
                  alt="top streamer"
                />
              </td>

              <td> SAPNAP</td>

              <td></td>
              <td>4M</td>
              <td>213,562</td>
              <td>53.3 hours</td>
              <td>303,000</td>
              <td>16.4M</td>
            </tr>
            <tr>
              <td>
                <span className="badge text-bg-warning rounded-pill">7</span>
              </td>
              <td>
                <img
                  className="img-twitch"
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/6f36c08a-6f7d-40f1-a9e8-12eee2ff0f93-profile_image-300x300.png"
                  alt="top streamer"
                />
              </td>

              <td>SODAPOPPIN</td>

              <td></td>
              <td>21.2M</td>
              <td>213,562</td>
              <td>53.3 hours</td>
              <td>764,000</td>
              <td>7.2M</td>
            </tr>
            <tr>
              <td>
                <span className="badge text-bg-warning rounded-pill">8</span>
              </td>
              <td>
                <img
                  className="img-twitch"
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/d61321a5-9a02-4f46-b718-70e3c4260d66-profile_image-300x300.png"
                  alt="top streamer"
                />
              </td>

              <td>JUST_NS</td>

              <td></td>
              <td>6.9M</td>
              <td>213,562</td>
              <td>53.3 hours</td>
              <td>97,700</td>
              <td>8.4M</td>
            </tr>
            <tr>
              <td>
                <span className="badge text-bg-warning rounded-pill">9</span>
              </td>
              <td>
                <img
                  className="img-twitch"
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/a8a5da7b-5d96-4206-a3be-b3628c4d0f35-profile_image-300x300.png"
                  alt="top streamer"
                />
              </td>

              <td>JAHREIN</td>

              <td></td>
              <td>3.3M</td>
              <td>213,562</td>
              <td>53.3 hours</td>
              <td>96,000</td>
              <td>9.4M</td>
            </tr>
            <tr>
              <td>
                <span className="badge text-bg-warning rounded-pill">10</span>
              </td>
              <td>
                <img
                  className="img-twitch"
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/03cc56f6-05ff-49dd-8a8a-1f727cc8c0d3-profile_image-300x300.png"
                  alt="top streamer"
                />
              </td>

              <td> VALORANT_JPN</td>

              <td></td>
              <td>2.8M</td>
              <td>213,562</td>
              <td>53.3 hours</td>
              <td>906,000</td>
              <td>11.4M</td>
            </tr>
          </tbody>
        </table>
      </Container>
    </>
  );
}
