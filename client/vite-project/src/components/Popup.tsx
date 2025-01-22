// import React from 'react';
import Modal from 'react-bootstrap/Modal';

interface PopupProps {
  show: boolean;
  handleClose: () => void;
}

function Popup({ show, handleClose }: PopupProps) {

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
        <h4>Transformers</h4>
        <h6>2010</h6>
        <p>Action</p>
        Woohoo, you are reading this text in a modal!</Modal.Body>
      </Modal>
    </>
  );
}

export default Popup;