// import React from 'react';
import Modal from 'react-bootstrap/Modal';

interface PopupProps {
  show: boolean;
  props: any;
  handleClose: () => void;
}

function Popup({ show, handleClose, props }: PopupProps) {

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <h1>{props.title}</h1>
        <p>{props.overview}</p>
        Woohoo, you are reading this text in a modal!</Modal.Body>
      </Modal>
    </>
  );
}

export default Popup;