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
          <h4>{props.title}</h4>
          <p>{props.release_date}</p>
          <p>{props.overview}</p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Popup;