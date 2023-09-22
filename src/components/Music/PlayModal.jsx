import React from "react";
import { Modal } from "react-bootstrap";

function PlayModal({ show, onHide, songTitle, songPreview }) {
  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title> 🎶  {songTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <audio controls>
            <source src={songPreview} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PlayModal;
