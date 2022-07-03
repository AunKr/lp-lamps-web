import React from "react";
import { Modal, Button } from "react-bootstrap";
import './modal.css'
import portfolio1 from '../../assets/images/portfolio-1.jpg'

const ConfirmationModal = (props) => {
  return (
    <Modal show={props.open} onHide={props.handleClose} className='add-products'>
      <Modal.Header closeButton>
        <Modal.Title>Products Details</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="full-size">
          <div className="images-section">
            <img src={portfolio1} alt="reporting" />
          </div>
          <div className="title-section">
            <h3>Project information</h3>
            <ul>
              <li><strong>Category</strong>: Web design</li>
              <li><strong>Client</strong>: ASU Company</li>
              <li><strong>Project date</strong>: 01 March, 2020</li>
              <li><strong>Project URL</strong></li>
            </ul>
            <div class="portfolio-description">
              <h2>This is an example of portfolio detail</h2>
              <p>
                Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
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
