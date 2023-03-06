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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <img src={secondAlbum} alt="Adele 21 album cover" width="100" height="100" className="me-3 rounded" />
            21 | 2011</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <img src={firstAlbum} 
            alt="Adele 19 album cover" />
            19 | 2008</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}