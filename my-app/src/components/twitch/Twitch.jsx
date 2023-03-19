import React from "react";
import { Container } from "react-bootstrap";
import "./twitch.css";

export default function Twitch() {
  return (
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
            <th />
            <th>Streamer</th>
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
              <a href="https://www.twitch.tv/kingsleague">
                <img
                  class="img-twitch"
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/cc310a6e-8cee-435b-af4c-5b480b791037-profile_image-300x300.png"
                  alt="top streamer"
                />
              </a>
            </td>

            <td className="twitch-table-row">KINGSLEAGUE</td>

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
            <td>XQC</td>
            <td></td>
            <td></td>
            <td>57,234</td>
            <td>220.2 hours</td>
            <td>278,176</td>
            <td>12.6M</td>
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
            <td>LCS</td>
            <td></td>
            <td></td>
            <td>29,397</td>
            <td>132.7 hours</td>
            <td>400,429</td>
            <td>3.90M</td>
          </tr>
          <tr>
            <td>
              <span class="badge text-bg-warning rounded-pill">1</span>
            </td>
            <td>
              <img
                class="img-twitch"
                src="https://static-cdn.jtvnw.net/jtv_user_pictures/107a3c5e-ab5c-4e73-81ab-b11591ee477c-profile_image-300x300.png"
                alt="top streamer"
              />
            </td>

            <td>HASANABI</td>

            <td></td>
            <td></td>
            <td>213,562</td>
            <td>53.3 hours</td>
            <td>906,000</td>
            <td>11.4M</td>
          </tr>
          <tr>
            <td>
              <span class="badge text-bg-warning rounded-pill">1</span>
            </td>
            <td>
              <img
                class="img-twitch"
                src="https://static-cdn.jtvnw.net/jtv_user_pictures/ab49dc0a-4b33-4dba-adb7-2a0d7ed08f3a-profile_image-300x300.png"
                alt="top streamer"
              />
            </td>

            <td>BUSTER</td>

            <td></td>
            <td></td>
            <td>213,562</td>
            <td>53.3 hours</td>
            <td>906,000</td>
            <td>11.4M</td>
          </tr>
          <tr>
            <td>
              <span class="badge text-bg-warning rounded-pill">1</span>
            </td>
            <td>
              <img
                class="img-twitch"
                src="https://static-cdn.jtvnw.net/jtv_user_pictures/74586414-e27b-4347-89c5-109e42ac3e1d-profile_image-300x300.png"
                alt="top streamer"
              />
            </td>

            <td> SAPNAP</td>

            <td></td>
            <td></td>
            <td>213,562</td>
            <td>53.3 hours</td>
            <td>906,000</td>
            <td>11.4M</td>
          </tr>
          <tr>
            <td>
              <span class="badge text-bg-warning rounded-pill">1</span>
            </td>
            <td>
              <img
                class="img-twitch"
                src="https://static-cdn.jtvnw.net/jtv_user_pictures/6f36c08a-6f7d-40f1-a9e8-12eee2ff0f93-profile_image-300x300.png"
                alt="top streamer"
              />
            </td>

            <td>SODAPOPPIN</td>

            <td></td>
            <td></td>
            <td>213,562</td>
            <td>53.3 hours</td>
            <td>906,000</td>
            <td>11.4M</td>
          </tr>
          <tr>
            <td>
              <span class="badge text-bg-warning rounded-pill">1</span>
            </td>
            <td>
              <img
                class="img-twitch"
                src="https://static-cdn.jtvnw.net/jtv_user_pictures/d61321a5-9a02-4f46-b718-70e3c4260d66-profile_image-300x300.png"
                alt="top streamer"
              />
            </td>

            <td>JUST_NS</td>

            <td></td>
            <td></td>
            <td>213,562</td>
            <td>53.3 hours</td>
            <td>906,000</td>
            <td>11.4M</td>
          </tr>
          <tr>
            <td>
              <span class="badge text-bg-warning rounded-pill">1</span>
            </td>
            <td>
              <img
                class="img-twitch"
                src="https://static-cdn.jtvnw.net/jtv_user_pictures/a8a5da7b-5d96-4206-a3be-b3628c4d0f35-profile_image-300x300.png"
                alt="top streamer"
              />
            </td>

            <td>JAHREIN</td>

            <td></td>
            <td></td>
            <td>213,562</td>
            <td>53.3 hours</td>
            <td>906,000</td>
            <td>11.4M</td>
          </tr>
          <tr>
            <td>
              <span class="badge text-bg-warning rounded-pill">1</span>
            </td>
            <td>
              <img
                class="img-twitch"
                src="https://static-cdn.jtvnw.net/jtv_user_pictures/03cc56f6-05ff-49dd-8a8a-1f727cc8c0d3-profile_image-300x300.png"
                alt="top streamer"
              />
            </td>

            <td> VALORANT_JPN</td>

            <td></td>
            <td></td>
            <td>213,562</td>
            <td>53.3 hours</td>
            <td>906,000</td>
            <td>11.4M</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
