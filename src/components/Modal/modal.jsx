import React from "react";
import { Modal, Button } from "react-bootstrap";
import './modal.css'
import portfolio1 from '../../assets/images/portfolio-1.jpg'

const ConfirmationModal = (props) => {
  return (
    <Modal show={props.open} onHide={props.handleClose} className='add-products'>
      <Modal.Header closeButton>
        <Modal.Title>Product Details</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="full-size">
          <div className="images-section">
            <img src={props?.product?.image} alt="reporting" />
          </div>
          <div className="title-section">
            <h3>Product information</h3>
            <ul>
              <li><strong>Name</strong>: {props?.product?.name}</li>
              <li><strong>Category</strong>:{props?.product?.category}</li>
              <li><strong>SubCategory</strong>: {props?.product?.subcategory}</li>
            </ul>
            <div class="portfolio-description">
              {/* <h2>This is an example of portfolio detail</h2> */}
              <p>
              {props?.product?.description}
              </p>
            </div>
          </div>

        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmationModal;
