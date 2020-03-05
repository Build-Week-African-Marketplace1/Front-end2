import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import './Popup.css';

const Popup = (props) => {
  const {
    className
  } = props;

  const [popup, setPopup] = useState(false);

  const toggle = () => setPopup(!popup);

  return (
    <div className="popup">
      <Button color="danger" onClick={toggle}>Add Product</Button>
      <Modal isOpen={popup} toggle={toggle} className="modal">
        <ModalBody>
          Product Added | Listings Updated
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Home</Button>{' '}
          <Button color="secondary" onClick={toggle}>Add More</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Popup;