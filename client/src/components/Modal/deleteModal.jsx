import React, { useState } from "react";

import { Modal, Button } from "react-bootstrap";

// import "./DeleteModal.css";

const DeleteModal = (props) => {

  return (
    <Modal
      show={props.open}
      onHide={props.handleClose}      
      className="products-page Delete-Product"
    >
      <Modal.Header closeButton>
        <Modal.Title>{props?.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to delete {props?.product?.name}?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props?.onSubmit}>Yes</Button>
        <Button variant="primary" onClick={props?.handleClose}>No</Button>
    </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
