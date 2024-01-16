import React from "react";
import "../styles/Albums.css";
import Accordion from "react-bootstrap/Accordion";
import fourthAlbum from "../assets/30-album.png";
import thirdAlbum from "../assets/25-album.png";
import secondAlbum from "../assets/21-album.png";
import firstAlbum from "../assets/19-album.png";

export default function Albums() {
  return (
    <div className="albums-container">
      <h6 className="text-center fw-bold pt-5 pb-5 albums-title">
        DISCOGRAPHY
      </h6>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <img
              src={fourthAlbum}
              alt="Adele 30 album cover"
              width="100"
              height="100"
              className="me-3 rounded"
            />
            30 | 2021
          </Accordion.Header>
          <Accordion.Body>
            <ol>
              <li>Strangers by Nature</li>
              <li>Easy On Me</li>
              <li>My Little Love</li>
              <li>Cry Your Heart Out</li>
              <li>Oh My God</li>
              <li>Can I Get It</li>
              <li>I Drink Wine</li>
              <li>All Night Parking (ft Erroll Garner)</li>
              <li>Woman Like Me</li>
              <li>Hold On</li>
              <li>To Be Loved</li>
              <li>Love Is A Game</li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <img
              src={thirdAlbum}
              alt="Adele 25 album cover"
              width="100"
              height="100"
              className="me-3 rounded"
            />
            25 | 2015
          </Accordion.Header>
          <Accordion.Body>
            <ol>
              <li>Hello</li>
              <li>Send My Love (To Your New Lover)</li>
              <li>I Miss You</li>
              <li>When We Were Young</li>
              <li>Remedy</li>
              <li>Water Under the Bridge</li>
              <li>River Lea</li>
              <li>Love in the Dark</li>
              <li>Million Years Ago</li>
              <li>All I Ask</li>
              <li>Sweetest Devotion</li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <img
              src={secondAlbum}
              alt="Adele 21 album cover"
              width="100"
              height="100"
              className="me-3 rounded"
            />
            21 | 2011
          </Accordion.Header>
          <Accordion.Body>
            <ol>
              <li>Rolling in the Deep</li>
              <li>Rumour Has It</li>
              <li>Turning Tables</li>
              <li>Don't You Remember</li>
              <li>Set Fire to the Rain</li>
              <li>He Won't Go</li>
              <li>Take It All</li>
              <li></li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <img
              src={firstAlbum}
              alt="Adele 19 album cover"
              width="100"
              height="100"
              className="me-3 rounded"
            />
            19 | 2008
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}